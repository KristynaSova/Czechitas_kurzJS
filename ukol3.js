let odpoved = prompt('Ahoj, jak se jmenujes?');
console.log(odpoved);
let vek = Number(prompt('kolik je ti let'));
console.log(vek);

if (vek > 18) {
  console.log(
    'Vaše jmeno je ' +
      odpoved +
      ' je vam ' +
      vek +
      ' a tak mate pravo ridit auto'
  );
} else {
  console.log(
    'Vaše jmeno je ' +
      odpoved +
      'je vam ' +
      vek +
      ' a tak musite pockat 4 roky, než budete moci ridit auto'
  );
}
