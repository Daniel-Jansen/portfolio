<!DOCTYPE html>
<html class="min-h-screen overflow-x-hidden bg-gray-900 bg-gradient-to-b from-gray-900 to-teal-950" lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The portfolio of Daniël Jansen">
    <meta name="keywords" content="Portfolio, Daniël Jansen">
    <meta name="author" content="Daniël Jansen">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0">
    <title>Portfolio Daniël</title>
    @vite('resources/js/general.js')
  </head>

  <body style="font-family: 'Space Grotesk', sans-serif; background-image: url(images/Backgrounds/Stars.png);" class="relative text-white min-h-screen bg-gradient-to-b from-gray-900 to-teal-950 overflow-hidden">
    <div id="main-content" class="transition duration-[1s] opacity-0 overflow-hidden max-h-screen">
      @include('elements.header')
      <main class="pb-28">
        @yield('content')
      </main>
      @include('elements.footer')
    </div>
    @include('elements.loading')
  </body>
</html>