//global variables
var vocabList = ["dragon"];

//log all words from the vocabList array
for (i=0; i < vocabList.length; i++) {

	var fullWord = vocabList[i];
	var fullWordLength = fullWord.length;

	for (j=0; j < fullWordLength; j++) {
		console.log(fullWord[j]);
	}

	//console.log(vocabList[i]);
	//console.log(i);
}
