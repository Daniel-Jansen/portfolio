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

  {{-- For when Javascript isn't enabled in the browser --}}
  <noscript id="nojavascript"
    style="
    display: block; 
    position: fixed; 
    background-color: black; 
    color: white; 
    width: 100%; 
    height: 100%; 
    text-align: center; 
    top: 0; 
    left: 0;"
  >
    <p>This portfolio website does not work without JavaScript!</p>
    <p style="color: #525252; font-size: 0.9rem;">(seriously, it's really bad)</p>
    <a href="https://www.google.com/search?q=How+to+enable+JavaScript" target="_blank">How to enable JavaScript</a>
  </noscript>


  <body style="font-family: 'Space Grotesk', sans-serif; background-image: url(images/Backgrounds/Stars.png);" class="relative text-white min-h-screen bg-gradient-to-b from-gray-900 to-teal-950 overflow-hidden">
    <div id="main-content" class="transition duration-[1s] opacity-0 overflow-hidden max-h-screen">
      @include('elements.header')
      <img src="images/Space-ship.png" id="rocket" style="left: -100px;" class="absolute transition-[left] duration-[6000ms] ease-linear cursor-pointer top-0 h-20 z-20">
      <main class="pb-28">
        @yield('content')
      </main>
      @include('elements.footer')
    </div>
    @include('elements.loading')
  </body>
</html>