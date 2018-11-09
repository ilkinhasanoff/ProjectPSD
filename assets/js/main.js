var Shuffle = window.Shuffle;

var myShuffle = new Shuffle(document.querySelector('.my-shuffle'), {
  itemSelector: '.image-item',
  sizer: '.my-sizer-element',
  buffer: 1,
});

window.jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
  var input = evt.currentTarget;
  if (input.checked) {
    myShuffle.filter(input.value);
  }
});


mixin tile(obj)
  - colClass = obj.variant === 'col-span' ? 'col-6' : 'col-3'
  figure.image-item(class=colClass, data-groups=obj.groups)
    - ratio = '16x9'
  
    if obj.variant == 'col-span'
      - ratio = '32x9'
    else if obj.variant == 'row-span'
      - ratio = '9x80'
  
    div.aspect(class="aspect--" + ratio)
      div.aspect__inner
        img(src=obj.src, obj.alt)
        
mixin content()
  .row
    .col
      p.mb-1 Filters:
  .row.mb-3
    .col
      div.btn-group(data-toggle="buttons")
        label.btn.btn-outline-primary.active
          input(type="radio", name="shuffle-filter", value="all" checked)
          | All
        label.btn.btn-outline-primary
          input(type="radio", name="shuffle-filter", value="nature")
          | Nature
        label.btn.btn-outline-primary
          input(type="radio", name="shuffle-filter", value="fruit")
          | Fruit
        label.btn.btn-outline-primary
          input(type="radio", name="shuffle-filter", value="architecture")
          | Architecture

  //- Loop through all the images and create tiles from them.
  div.row.my-shuffle
    each obj in images
      +tile(obj)
    .col-1.my-sizer-element

//- Define some images
- var images = [];
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=882e851a008e83b7a80d05bdc96aa817' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=6237e62a10fa079d99b088b0db0144ac' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=86dc2dcb74588b338dfbb15d959c5037' })
- images.push({ groups: ['architecture'], alt: '', src: 'https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=7ab1744fe016fb39feb2972244246359' })
- images.push({ groups: ['nature', 'architecture'], variant: 'row-span', alt: '', src: 'https://images.unsplash.com/photo-1416184008836-5486f3e2cf58?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=601&h=676&fit=crop&s=5f1f1ffba05979d4248cc16d8eb82f0a' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=57a00aabcfaa1b04fd268ea3ad4a4cbb' })
- images.push({ groups: ['nature'], variant: 'col-span', alt: '', src: 'https://images.unsplash.com/photo-1473175494278-d83ed8459089?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1208&h=338&fit=crop&s=fd1cf1e8eddf88ef87015314f85ce3fb' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1434144893279-2a9fc14e9337?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=d2f930bbb91de7e19e6436f5b03897b0' })
- images.push({ groups: ['fruit'], alt: '', src: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=eda14f45e94e9024f854b1e06708c629' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=70dabb0dcc604c558245b72f3109bbbb' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=4e19022724205e38e491961f50e47d32' })
- images.push({ groups: ['nature'], alt: '', src: 'https://images.unsplash.com/photo-1430026996702-608b84ce9281?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=363a88755a7b87635641969a8d66f7aa' })

div.container.mt-3
  h1.mb-3
    | Bootstrap 4 grid and filters with&#32;
    a(href="https://vestride.github.io/Shuffle/", target="_blank" rel="noopener") Shuffle

  +content()