//Práctica de Map y Set
let poll = new Map();

function addOption(option){
  if(option === ""){
    return "Option cannot be empty.";
  }else if(!poll.has(option)){
    poll.set(option, new Set());
    return "Option \"" + option + "\" added to the poll.";
  }else{
    return "Option \"" + option + "\" already exists.";
  }
}
function vote(option, voterId){
  if(!poll.has(option)){
    return "Option \"" + option + "\" does not exist.";
  }
  const optionVotes = poll.get(option);
  if(optionVotes.has(voterId)){
    return "Voter " + voterId + " has already voted for \"" + option +"\".";
  }else{
    optionVotes.add(voterId);
    return "Voter " + voterId + " voted for \"" + option + "\"."; 
  }
}
function displayResults() {
  let lines = ["Poll Results:"];
  poll.forEach((value, key) => {
    lines.push(`${key}: ${value.size} votes`);
  });
  return lines.join("\n");
}
poll.set("Morocco", new Set());
poll.set("España", new Set());
poll.set("Italia", new Set());
vote("España", 1);
vote("España", 2);
vote("España", 3);
console.log(displayResults());