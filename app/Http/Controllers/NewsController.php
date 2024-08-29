<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Get the search query and category from the request
        $searchQuery = $request->input('search');
        $category = $request->input('category');
        
        // Fetch news data, filtering by search query and category if provided
        $news = News::orderByDesc('id')
                    ->when($searchQuery, function($query, $searchQuery) {
                        return $query->where('title', 'like', '%' . $searchQuery . '%')
                                     ->orWhere('description', 'like', '%' . $searchQuery . '%')
                                     ->orWhere('category', 'like', '%' . $searchQuery . '%')
                                     ->orWhere('author', 'like', '%' . $searchQuery . '%');
                    })
                    ->when($category, function($query, $category) {
                        return $query->where('category', 'like', '%' . $category . '%');
                    })
                    ->paginate(9);
        
        // Get the current user
        $user = Auth::user();
        
        return Inertia::render('HomePage', [
            'news' => $news->items(), // News data
            'meta' => [
                'current_page' => $news->currentPage(),
                'last_page' => $news->lastPage(),
                'total' => $news->total(),
                'per_page' => $news->perPage(),
            ],
            'user' => $user,
            'title' => 'Home Page',
            'searchQuery' => $searchQuery, // Include search query in response
            'category' => $category, // Include category in response
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'author' => 'required|string',
        ], [
            'title.required' => 'The title field is required.',
            'description.required' => 'The description field is required.',
            'category.required' => 'The category field is required.',
        ]);
        
        $name = Auth::user()->name;
        $news['author'] = $name;

        News::create($news);

        // Redirect back with a success message 
        return back()->with('message', 'News created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        // Ambil data news berdasarkan akun yang sedang login
        $news = News::where('author', Auth::user()->name)->get();

        return Inertia::render('Dashboard', [
            'news' => $news,    
        ]); 
    }   

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        // Mengembalikan respon atau mengarahkan ke halaman lain
        return Inertia::render('UpdateNews', [
            'news' => $news->find(request()->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news, String $id)
    
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
        ], [
            'title.required' => 'The title field is required.',
            'description.required' => 'The description field is required.',
            'category.required' => 'The category field is required.',
        ]);

        // Mendapatkan nama pengguna yang sedang terautentikasi
        $name = Auth::user()->name;

        // Mengambil data berita berdasarkan id
        $news = News::findOrFail($id);

        // Memperbarui data berita dengan data yang sudah divalidasi
        $news->update([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'category' => $validatedData['category'],
            'author' => $name,  
        ]);

        // Mengembalikan respon atau mengarahkan ke halaman lain
        return redirect()->route('dashboard')->with('message', 'News updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news, String $id)
    {
        // Menghapus data berita berdasarkan id
        $news->findOrFail($id)->delete();

        // Mengembalikan respon atau mengarahkan ke halaman lain
        return back()->with('message', 'News deleted successfully!');
    }
}
