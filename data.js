const women_clothes = [
	"f-001011-ModelRomper-c1-1",
	"f-001011-PurpleStraps-c1-2",
	"f-001011-Straps-c1-2",
	"f-010000-AliceGreyDress-c1-3",
	"f-010000-AliceWorkDress-c1-3",
	"f-010000-CandyDress-c1-4",
	"f-010000-DoubleModDress-c1-5",
	"f-010000-JungleWildDress-c1-6",
	"f-010000-LeafMistDress-c1-7",
	"f-010000-LemonStrapDress-c1-4",
	"f-010000-ModBlackDress-c1-5",
	"f-010000-NightBlackDress-c1-8",
	"f-010000-NightFlingDress-c1-6",
	"f-010000-NightGlamDress-c1-7",
	"f-010000-PowderPinkDress-c1-8",
	"f-010000-SilverDayDress-c1-9",
	"f-011000-Clarissa-c1-10",
	"f-011000-ClarissaSea-c1-10",
	"f-011000-ClarissaNight-c1-10",
	"f-100000-ClipHoodie-c2-1",
	"f-100000-ClipShirt-c2-2",
	"f-100000-MavenTop-c1-11",
	"f-100000-PleatherTop-c1-12",
];


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}