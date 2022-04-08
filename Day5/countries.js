const _countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  if(_countries.includes('Ethiopia')){
    console.log('Ethiopia')
  }
  else{
    _countries.push('Ethiopia')
  }
  console.log(_countries.slice(0,10));
  console.log(_countries[(_countries.length-1)/2]);
