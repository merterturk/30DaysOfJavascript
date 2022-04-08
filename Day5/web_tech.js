    const _webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  if(_webTechs.includes('Sass')){
      console.log('Sass is a CSS preprocess');
  }
  else{
      _webTechs.push('Sass');
      console.log(_webTechs);
  }

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
