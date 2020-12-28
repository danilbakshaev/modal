let emoji = [
  {id: 1, title: 'Мощь', price: 20, emoji: '💪'},
  {id: 2, title: 'Сердце', price: 30, emoji: '❤️'},
  {id: 3, title: 'Мозг', price: 40, emoji: '🧠'}
]

const toHTML = emoji => `
  <div class="col">
    <div class="card">
      <span class="card-img-top" style="font-size: 90px; height: 130px;"> ${emoji.emoji} </span>
      <div class="card-body">
        <h5 class="card-title">${emoji.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price" data-id=${emoji.id}>Посмотреть цену</a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id=${emoji.id}>Удалить</a>
      </div>
    </div>
  </div>
`

function render() {
  const html = emoji.map(toHTML).join('')
  document.querySelector('#emoji').innerHTML = html
}

render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Закрыть', type: 'primary', handler() {
      priceModal.close()
    }}
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const emoj = emoji.find(e => e.id === id)

  if (btnType === 'price') {
    priceModal.setContent (`
      <p>Цена на ${emoj.title}: <strong>${emoj.price}$</strong>
    `)
    priceModal.open();
    console.log(emoj);
  } else if (btnType === 'remove'){
    $.confirm({
      title: 'Вы уверены?',
      content: `<p>Вы удаляете emoji: <strong>${emoj.title}</strong></p>`
    }).then(() => {
      emoji = emoji.filter(e => e.id !== id)
      render()
    }).catch(() => {
      console.log("Cancel")
    })
  }
})