<template>
  <section class="article-content">
    <!--    article content header-->
    <div class="article-content__header">
      <h1>10 Best Photo Apps For Incredible iPhone Photography (2020 Edition)</h1>
      <div class="article-content__header--divider"/>
    </div>

    <!--    article content text-->
    <div class="article-content__text">
      How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché
      vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone
      photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel
      photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel
      photos with your iPhone!
    </div>

    <!--    article content photo-->
    <div class="article-content__image">
      <v-img :src="require('@/assets/images/img.jpg')"></v-img>
    </div>

    <!--    article content title-->
    <div class="article-content__title">
      <h2>1. Research Your Destination To Find The Best Photo Opportunities</h2>
    </div>

    <!--    article content text-->
    <div class="article-content__text">
      <p>Before your trip, I recommend researching the destination to find the most interesting photo opportunities.</p>
      <p>I always research the location I’m traveling to. I do this extensively and obsessively!</p>
      <p>It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great
        places to take pictures.</p>
      <p>So, what kind of research can you do?</p>
      <p>First, you could search for photos that other people have taken at the locations you’re planning to visit.</p>
      <p>Search on Instagram or Google to get an idea of the kinds of photos people take there.</p>
    </div>

    <!--    article content title-->
    <div class="article-content__title">
      <h2>2. Capture Your Journey To Tell The Complete Story Of Your Travels</h2>
    </div>

    <!--    article content text-->
    <div class="article-content__text">
      <p>Travel photography isn’t just about photographing the destination.</p>
      <p>For a more complete photographic story, capture your journey to and from the location you’re visiting.</p>
      <p>If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller.</p>
      <p>And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re
        flying above.</p>
      <p>Your journey will often involve several different types of transport. And they all offer great
        photo opportunities.</p>
      <p>Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos.</p>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ArticleContent',

  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/components/articleContnent';
</style>
