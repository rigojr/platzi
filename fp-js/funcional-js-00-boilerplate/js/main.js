const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

  const attrsToString = (obj = {}) => {
    const keys = Object.keys(obj)
    const attrs = []

    keys.forEach(key => {
      attrs.push(`${key}="${obj[key]}"`)
    });
    return attrs.join('')
  }

  const tagAttres = obj => (content = "") =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`
  
  const tag = t => {
    if( typeof t === 'string')
      tagAttres({tag: t})
    else
      tagAttres(t)
  }
  
  let description = $('#description')
  let calories = $('#calories')
  let carbs = $('#carbs')
  let protein = $('#protein')

  let list = []

  description.keypress( () => {
    description.removeClass('is-invalid')
  })

  calories.keypress( () => {
    calories.removeClass('is-invalid')
  })

  carbs.keypress( () => {
    carbs.removeClass('is-invalid')
  })

  protein.keypress( () => {
    protein.removeClass('is-invalid')
  })

  const validateInputs = () => {

    description.val() ? '' : description.addClass('is-invalid')
    calories.val() ? '' : calories.addClass('is-invalid')
    carbs.val() ? '' : carbs.addClass('is-invalid')
    protein.val() ? '' : protein.addClass('is-invalid')

    if( 
      description.val() && 
      calories.val() &&
      carbs.val() &&
      protein.val()
    ) add()

  }

  const add = () => {
    const newItem = {
      description: description.val(),
      calories: parseInt(calories.val()),
      carbs: parseInt(carbs.val()),
      protein: parseInt(protein.val())
    }
    list.push(newItem)
    cleanInputs()
    console.log(list)
  }

  const cleanInputs = () => {
    description.val('')
    calories.val('')
    carbs.val('')
    protein.val('')
  }