const checkForLetters = (term, letter) => {
    let count = [...term].reduce((acc, value) =>         
       value === letter ? ++acc : acc
    , 0);
    return `Raidė ${letter} sakinyje rasta ${count} kartus`;
  };

  console.log(checkForLetters('Lorem', 'e'));


  // test
  // console.log(checkForLetters("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "e"));
//   console.assert(checkForLetters("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "e") === "Raidė e sakinyje rasta 5 kartus", "checkForLetters failed");