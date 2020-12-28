const emoji = [
  {id: 1, title: 'Мощь', price: 20, emoji: '💪'},
  {id: 2, title: 'Сердце', price: 30, emoji: '❤️'},
  {id: 3, title: 'Мозг', price: 40, emoji: '🧠'}
]

const modal = $.modal({
  title: 'Danil modal',
  closable: true,
  content: `
    <p>lorem ipsum dolor sit.</p>
    <p>lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ок', type: 'primary', handler() {
      console.log('Primary btn clicked')
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      console.log('Danger btn clicked')
      modal.close()
    }},
  ]
})