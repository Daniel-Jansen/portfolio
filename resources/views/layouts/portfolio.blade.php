<!DOCTYPE html>
<html class="min-h-screen overflow-x-hidden" lang="en">
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>Portfolio Daniël</title>
    @vite('resources/js/general.js')
  </head>

  <body style="font-family: 'Space Grotesk', sans-serif;" class="relative text-white overflow-x-hidden min-h-screen bg-gradient-to-b from-gray-900 to-teal-950">
    <div id="main-content" class="transition duration-700 hidden opacity-0">
      @include('elements.header')
      @yield('content')
      @include('elements.footer')
    </div>
    <div id="loading-screen" class="min-h-screen flex justify-center items-center transition duration-700">
      <div>loading... </div>
      <div><span class="block material-symbols-outlined animate-spin">settings</span></div>
    </div>
  </body>
</html>