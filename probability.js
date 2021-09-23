const ex001Statement = "Exercise 1: An urn contains fifty balls numbered from one to fifty. A ball is\nwithdrawn by chance. What is the probability of the ball to:\n";

const generateEx001SampleSpaceSet = () => {
	let sampleSpaceSet = [];

	for (let i = 0; i < 50; i++) {
		sampleSpaceSet.push(i + 1);
	}

	return sampleSpaceSet;
}

const ex001LetAStatement = "a. have a number multiple of twelve?\n";

const ex001SSet = generateEx001SampleSpaceSet();

const ex001LetAESet = ex001SSet.filter((n) => n % 12 === 0);

console.log(ex001Statement);
console.log(ex001LetAStatement);
console.log("S = {" + ex001SSet.join(", ") + "}\n");
console.log("E = {" + ex001LetAESet.join(", ") + "}\n");
console.log("n(S) = " + ex001SSet.length + "\n");
console.log("n(E) = " + ex001LetAESet.length + "\n");
console.log("P(E) = " + ex001LetAESet.length * 100 / ex001SSet.length + "%\n");



