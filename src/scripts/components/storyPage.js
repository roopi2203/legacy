class storyPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <article>
        <section id="slideShow">
          <div class="container-1">
            <div class="wrapper-1">
              <div class="slideshow">
                <img src="slideshow/SlideOne.png" class="slide-img" />
                <div class="overlay"></div>
                <div class="service-desc">
                  <h3>Perlawanan Pattimura (1817)</h3>
                  <hr />
                  <p>Tokoh utama adalah Thomas Matulessi atau yang lebih dikenal Pattimura, dengan daerah perlawanan Maluku (Ambon).

                  Tokoh pendukung perlawanan ini adalah Christina Martha Tiahahu, Paulus Tiahahu, Philip Latumahina, Said Printah, Antoni Ribok.
                  
                  Pada 16 Mei 1817, pasukan kapitan Pattimura merebut benteng Duurstede, namun dengan pasukan Belanda yang dilengkapi perlengkapan persenjataan bisa merebut kembali benteng Duurstede.</p>
                </div>
              </div>
              <div class="slideshow">
                <img src="slideshow/SlideTwo.png" class="slide-img" />
                <div class="overlay"></div>
                <div class="service-desc">
                  <h3>Perlawanan Untung Surapati (1686-1706)</h3>
                  <hr />
                  <p>Tokoh utamanya adalah Untung Surapati, dengan daerah perlawanannya di Jawa Tengah dan Jawa Timur.
                  Ketika gabungan pasukan keraton dan VOC bergabung menyerang Untung Surapati di Bangli, Jawa Timur, Untung Surapati dikalahkan dan dihukum mati.</p>
                </div>
              </div>
              <div class="slideshow">
                <img src="slideshow/SlideThree.png" class="slide-img" />
                <div class="overlay"></div>
                <div class="service-desc">
                  <h3>Perlawanan Sultan Hasanuddin (1633-1666)</h3>
                  <hr />
                  <p>Tokoh utamanya adalah Sultan Hasanuddin, dengan daerah perlawanannya mencakup Makassar, Gowa, dan Tallo.
                  Sultan Hasanuddin berhasil dikalahkan oleh Belanda yang bekerja sama dengan Raja Bone, Arupalaka. Kekalahan Sultan Hasanuddin ditandai dengan ditandanganinya Perjanjian Bongaya.</p>
                </div>
              </div>
              <div class="slideshow">
                <img src="slideshow/SlideFour.png" class="slide-img" />
                <div class="overlay"></div>
                <div class="service-desc">
                  <h3>Perlawanan Trunojoyo (1674-1680)</h3>
                  <hr />
                  <p>Tokoh utamanya adalah Panembahan Maduretno atau Trunojoyo, dengan daerah kekuasaannya di Jawa Timur dan Jawa Tengah.
                  Tokoh pendukung perlawanan ini adalah Sunan Giri, Kraeng Galesung, dan Monte Merano, yang dimulai dari sebuah kekecewaan rakyat pesisir Jawa dan Madura terhadap kekuasaan Mataram.
                  Perlawanan Trunojoyo dimulai di Madura pada 1674, didukung oleh para bangsawan Madura yang berada di bawah kekuasaannya.</p>
                </div>
              </div>
            </div>
            <div class="indicators-1">
              <button class="active"></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </section>
      </article>
      <div>
      <div class="Desc">
            <h2>Awal Kedatanngan Manusia ke Nusantara</h2>
            <h1>Source: www.historia.id</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Quam nulla urna libero quam urna massa nisl. Vitae vulputate nam ultricies sit eleifend fames mauris elit. Facilisi sed eget facilisi vulputate. Purus scelerisque sed semper sit facilisis est scelerisque non nibh. Enim ut id donec sed sit montes molestie consequat. Praesent congue facilisis at felis. Enim ac venenatis vestibulum amet. Ut diam scelerisque non porttitor ut nec odio tortor non.
                Scelerisque ornare nisl ut iaculis elementum condimentum. Eleifend aliquet tellus quis duis praesent fermentum imperdiet maecenas et. Risus sit amet dignissim elit est senectus quis in. Libero quis turpis enim sit mattis sodales ultricies maecenas fermentum. Dignissim adipiscing aliquam vitae at hac ac vitae sit sagittis. Volutpat mollis ullamcorper dis sed consectetur sed scelerisque non pretium. Duis dolor vestibulum pulvinar odio aenean quam aenean. Laoreet purus sed erat sed ultrices tempor et. Et enim sapien a a ultrices.
            </p>
            <p>
                At dolor egestas eleifend eu. Malesuada faucibus fermentum commodo mattis non arcu ac ornare. Vitae mi lacus cursus sapien nullam fringilla. Egestas nulla sit vitae consequat velit purus blandit maecenas adipiscing. Est amet pellentesque congue nunc imperdiet odio id risus. Aliquet posuere commodo scelerisque molestie at a. Velit consectetur sit aenean sed mauris tortor cras congue massa. Quis tortor eu nec mauris tellus tincidunt. Ac enim lectus vulputate semper enim egestas. Ac tellus congue egestas sit. Sed scelerisque aliquet et pellentesque cras malesuada eu quam gravida. Leo nunc sem nulla varius sem sit tempus. Diam quisque vivamus a vestibulum tristique risus arcu enim.
                Scelerisque ut sem dolor diam ipsum enim turpis quis. Leo accumsan quis sed turpis. Pulvinar pellentesque at lacus non purus. Scelerisque tellus sit dui enim pellentesque. Egestas nullam sed non aenean quis tempus pretium consequat auctor. Dolor magna sem felis nec egestas. A commodo euismod enim venenatis scelerisque tempor sed in eget. In arcu donec odio fusce tristique risus in dictum nulla. Eu egestas dictum in gravida mus sit eu. Accumsan ut sollicitudin et nibh sit tellus posuere. Odio pulvinar tortor cursus morbi facilisi egestas et lectus lectus.
            </p>
            <p>    Dictum commodo libero amet erat amet netus massa. Natoque tempus sagittis aliquam scelerisque massa et lectus imperdiet et. Dolor feugiat tristique lobortis sit vestibulum tempor vitae pellentesque. Sit feugiat enim lacinia viverra. A morbi nunc pellentesque dolor mauris non lacus velit. Amet donec nisl interdum morbi. Sed pellentesque sagittis lorem at ac maecenas ligula vitae vehicula. Semper elementum volutpat mattis felis. Lectus fermentum orci ullamcorper est volutpat in pharetra pellentesque quam. Non dolor tristique velit mollis tellus. Et non justo ac suscipit odio ut netus consequat. Duis nullam pretium elementum feugiat.</p>
        </div>
    `;
  }
}

customElements.define('story-page', storyPage);
