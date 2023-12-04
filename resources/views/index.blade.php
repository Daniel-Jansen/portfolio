@extends('layouts.portfolio')
@section('content')
    <img src="images/fires/Campfire.png" class="w-72 my-14 m-auto cursor-pointer">
    <section class="w-full flex justify-center flex-col lg:flex-row">
        <div style="background-image: url(images/Daniël.png)" class="min-h-[12rem] bg-cover bg-center w-full opacity-[90%] lg:w-1/2"></div>
        <div class="w-full p-6 lg:w-1/2 z-30">
            <span class="font-semibold text-[2.5rem]">Hello!</span><span id="hand-emoticon" class="material-symbols-outlined cursor-default origin-bottom ml-3 -rotate-[26deg] skew-x-6 ease-in-out duration-200 hover:-skew-x-12 hover:rotate-[25deg]">hand_gesture</span><br>
            <p>The name's Daniël. <br>What's your name, internet stranger?</p>
            <input type="text" placeholder="John Doe" class="w-1/2  max-w-[16rem] bg-transparent rounded border-b border-teal-900 caret-teal-900 p-0.5 mt-1 transition-[width] duration-300 focus:outline-none focus:w-full focus:border-x focus:bg-gray-900 sm:w-[9rem]">
        </div>

        {{-- Fireplace --}}
        {{-- <div class="bg-amber-500 opacity-10 transition duration-500 rounded-full h-72 w-72"></div>
        <div class="bg-amber-500 opacity-10 transition duration-500 rounded-full h-52 w-52 absolute"></div>
        <div class="bg-gradient-to-br from-yellow-800 via-yellow-900 to-yellow-950 rounded translate-y-16 translate-x-4 h-14 w-2 origin-top-left rotate-[65deg] absolute"></div>
        <div class="bg-gradient-to-bl from-yellow-800 via-yellow-900 to-yellow-950 rounded translate-y-16 -translate-x-4 h-14 w-2 origin-top-right rotate-[-65deg] absolute"></div> --}}
    </section>
    <section class="w-full flex justify-center flex-col lg:flex-row">
        <div class="w-full p-6 lg:w-1/2">test</div>
        <div class="w-full lg:w-1/2">test</div>
    </section>
    <div class="h-[20px]">test</div>
@stop