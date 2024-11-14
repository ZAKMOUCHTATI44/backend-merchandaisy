<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $entrainements = Tag::where('name', 'Entrainements')->first();
        $nutrition = Tag::where('name', 'Nutrition')->first();
        $lifestyle = Tag::where('name', 'Lifestyle')->first();
        $Basics = Tag::where('name', 'Basics')->first();
        $blogs = collect([
            [
                "Répétitions lentes et répétitions <br /> rapides pour la croissance musculaire",
                "/storage/blogs/en.jpg",
                "Le principal avantage de l'utilisation de reps rapides est qu'il vous permet d'utiliser une charge plus lourde ou d'effectuer plus de reps par rapport aux reps lents. Et bien que le temps sous tension soit réduit lorsque des répétitions rapides sont utilisées, cela ne semble pas réellement entraver la croissance musculaire",
                "3min de lecture",
                $entrainements->id
            ],
            [
                "Les meilleurs fruits pour maigrir et réussir son régime",
                "/storage/blogs/frut.jpg",
                "content",
                "3min de lecture",
                $nutrition->id
            ],
            [
                "Tout savoir sur le régime keto",
                "/storage/blogs/keto.jpg",
                "content",
                "5min de lecture",
                $nutrition->id
            ],
            [
                "Tout Savoir sur le jeûne intermittent",
                "/storage/blogs/jeune-intermittent.jpg",
                "content",
                "3min de lecture",
                $nutrition->id
            ],
            [
                "Une alimentation pour une prise de masse rapide",
                "/storage/blogs/prise de masse.jpg",
                "content",
                "4min de lecture",
                $nutrition->id
            ],
            [
                "Bad carbs vs good carbs",
                "/storage/blogs/carbs.jpg",
                "content",
                "4min de lecture",
                $nutrition->id
            ],
            [
                "Tout savoir sur les acides aminés : faut-il vraiment acheter des BCAA ?",
                "/storage/blogs/walnut-kernels.jpg",
                "content",
                "4min de lecture",
                $nutrition->id
            ],
            [
                "Méditation du matin : technique et bienfaits",
                "/storage/blogs/meditation.jpg",
                "content",
                "4min de lecture",
                $lifestyle->id
            ],
            [
                "Le guide complet des glucides",
                "/storage/blogs/blog-3.webp",
                "cotent",
                "4min de lecture",
                $Basics->id
            ],
            [
                "Le guide intégral de la calorie",
                "/storage/blogs/blog-1.webp",
                "cotent",
                "4min de lecture",
                $Basics->id
            ],
            [
                "Le guide ultime de la protéine",
                "/storage/blogs/blog-3.webp",
                "cotent",
                "4min de lecture",
                $Basics->id
            ]
        ]);

        $blogs->each(function ($blog) {
            $newBlog = new Blog();
            $newBlog->title = $blog[0];
            $newBlog->slug = Str::slug($blog[0]);
            $newBlog->picture = $blog[1];
            $newBlog->content = $blog[2];
            $newBlog->time_of_read = $blog[3];
            $newBlog->tag_id = $blog[4];
            $newBlog->save();
        });
    }
}
