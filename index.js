let selectedOption = genres.options[genres.selectedIndex];
  alert( selectedOption.value );

  
  let newOption = new Option("Classic", "classic");
  genres.append(newOption);

  newOption.selected = true;