<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
  <title>Portfolio Daniël</title>
</head>
<body>
    @include('elements.header')
    @yield('content')
    @include('elements.footer')
</body>
</html>