const axios = require('axios');

/**
 * author: pablopsdigital
 * date: 11/12/2021
 *
 * This is a module created to practice
 * Information is returned from the public API: https://disneyapi.dev/
 */

const GetARandomNameDisneyCharacter = async () => {
  try {
    const resList = await axios.get('https://api.disneyapi.dev/characters');
    const randomIndex = Math.floor(Math.random() * resList.data.count);
    // console.log('Length: ', res.data.count);
    // console.log('Index', randomIndex);

    //Search character for id
    const resCharacter = await axios.get(
      `https://api.disneyapi.dev/characters/${randomIndex}`
    );

    //Retrun select random character
    const characterRandom = `Your character random is: ${resCharacter.data.name}`;
    return characterRandom;
  } catch (error) {
    return 'Upps!!! Miky Mouse has lost his way, try again.';
  }
};

// GetARandomNameDisneyCharacter().then((res) => console.log(res));

//Export module
module.exports = { GetARandomNameDisneyCharacter };
