<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UpHealth!</title>
</head>
<body>
    <h1>Posts</h1>
    <?php while(have_posts()) : ?>
        <?php the_post(); ?>

        <h1><?php the_title(); ?></h1>
        <p><?php the_content(); ?></p>

        <hr>

    <?php endwhile; ?>  
</body>
</html>