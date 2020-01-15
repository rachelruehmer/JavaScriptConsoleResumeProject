let name = "Rachel Ruehmer";
let careerfield = "Student";
let description = "Cool cat";
let interests = ['marathoning reality tv', 'hugging cats', 'making wire jewelry']

let pos1 = {
    CompanyName: "Target",
    JobTitle: "Style Consultant",
    jobDes: "blah blah blah"
}
let pos2 = {
    CompanyName: 'Academy Sports + Outdoors',
    JobTitle: 'Receiving Associate',
    jobDes: 'Blah blah blah blah'

};
let skills = ['eating', 'sleeping', 'whistling'];


console.log('name:' + name.toUpperCase());
console.log('career:' + careerfield);
console.log('Description:' + description);

console.log(' ');

console.log('My Interests');

for (i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i])
};

function displayPosition(compName, position, jobDescription) {
    console.log('* I worked at ' + compName + ', my position was ' + position + ', and my duties were ' + jobDescription)
}

console.log(' ')
console.log('My Previous Experience')
displayPosition(pos1.CompanyName, pos1.JobTitle, pos1.jobDes)
displayPosition(pos2.CompanyName, pos2.JobTitle, pos2.jobDes)

console.log(' ');

console.log('My Skills');

function displaySkills(skillName, isCool) {
    if (isCool == true) {console.log ('* BAM ' + skillName)}
    else if (isCool == false) {console.log ('* ' + skillName)}
}

displaySkills('eating', false);
displaySkills('sleeping', true);
displaySkills('whistling', true)