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

  const tableRowTag = tag('tr')
  // const tableRow = items => tableRowTag(tableCells(items))
  const tableRow = items => compose(tableRowTag, tableCells)(items)

  const tableCell = tag('td')
  const tableCells = items => items.map(tableCell).join('')
  
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
    updateTotals()
    console.log(list)
  }

  const updateTotals = () => {
    let calories = 0, carbs = 0, protein = 0

    list.forEach( item => {
      calories += item.calories
      carbs += item.carbs
      protein += item.carbs
    })

    $('#totals-calories').text(calories)
    $('#totals-carbs').text(carbs)
    $('#totals-protein').text(protein)

    console.log(calories)

  }

  const cleanInputs = () => {
    description.val('')
    calories.val('')
    carbs.val('')
    protein.val('')
  }