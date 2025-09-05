// Check if string is a heading
export function checkHeading(str){
    // Heading ends with :* or starts with ** and ends *
    return /:\*$/.test(str) || /^\*\*(.*)\*$/.test(str);
}

// Remove stars for display only
export function replaceHeadingStars(str) {
    let cleaned = str;

    // Remove heading end *
    cleaned = cleaned.replace(/:\*$/,"");

    // Remove subheading start * ** or *
    cleaned = cleaned.replace(/^\*\s?\*\*/,""); 
    cleaned = cleaned.replace(/^\*/,"");        

    // Remove subheading end **
    cleaned = cleaned.replace(/\*\*$/,"");      

    // Remove any trailing single * (extra safety)
    cleaned = cleaned.replace(/\*$/,"");

    // Remove start "*"
    cleaned = cleaned.replace(/^\*/,"");

    // Remove start "**" (if any)
    cleaned = cleaned.replace(/^\*\*/,"");

       // 1️⃣ Remove any starting stars (* or **)
    cleaned = cleaned.replace(/^\*+/,"");

    // 2️⃣ Remove stars after punctuation (?, :, ) etc.)
    cleaned = cleaned.replace(/([:\?\)])\**/g,"$1");

    // 3️⃣ Remove any remaining trailing stars
    cleaned = cleaned.replace(/\*+$/,"");

    return cleaned.trim();
}
