const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let outputParagraphArray = [];

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  // TODO: Log the answer in a database
  outputParagraphArray.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);
 
  rl.question(`What's an activity you like doing?` , (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    outputParagraphArray.push(answer);

    rl.question(`What do you listen to while doing that? ` , (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
      outputParagraphArray.push(answer);

      rl.question(`Which meal is your favorite (eg: dinner, brunch, etc.)? ` , (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        outputParagraphArray.push(answer);

        rl.question(`What's your favourite thing to eat for that meal? ` , (answer) => {
          // TODO: Log the answer in a database
          console.log(`Thank you for your valuable feedback: ${answer}`);
          outputParagraphArray.push(answer);

          rl.question(`Which sport is your absolute favourite? ` , (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
            outputParagraphArray.push(answer);
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! ` , (answer) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${answer}`);
              outputParagraphArray.push(answer);
              let opA = outputParagraphArray;
              
              console.log(`${opA[0]} loves listening to ${opA[2]} while ${opA[1]}, devouring ${opA[4]} for ${opA[3]}, \nprefers ${opA[5]} over any other sport, and is amazing at ${opA[6]}.  `)

              rl.close();
              
            });
        
          });
      
        });
    
      });
      
    });

  });
});

//rl.close();

