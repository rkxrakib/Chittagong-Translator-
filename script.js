const dictionary = {
    "আমি": "আঁই",
    "আমরা": "আরা",
    "তুমি": "তুঁই",
    "তোমরা": "তোয়ারা",
    "সে": "ইতে",
    "তারা": "ইতারা",
    "কেমন": "ক্যান",
    "আছো": "আছ",
    "আছেন": "আছন",
    "কি": "কি",
    "কোথায়": "হন্ডে",
    "কেন": "কিল্লায়",
    "ভালো": "গম",
    "ভাত": "ভাত",
    "খাই": "হাই",
    "খাবো": "হাইয়ম",
    "খাচ্ছি": "হাইর",
    "যাবো": "যাইয়ুম",
    "যাই": "যাই",
    "করছি": "গরির",
    "করেছি": "গইজ্জি",
    "পারি": "ফারি",
    "না": "ন",
    "সকাল": "বেইন্নে",
    "সবাই": "বেগগুন",
    "নাম": "নাম",
    "তোমার": "তোঁয়ার",
    "আমার": "আঁঁত্তে",
    "সব": "বেগগুন"
};

function translateText() {
    let input = document.getElementById("inputText").value;
    if (!input) {
        alert("দয়া করে কিছু লিখুন!");
        return;
    }

    let words = input.split(" ");
    let translatedWords = words.map(word => {
        // ডিকশনারিতে শব্দ থাকলে সেটা বসাবে, না থাকলে আগেরটাই রাখবে
        let cleanWord = word.trim();
        return dictionary[cleanWord] || word;
    });

    // বিশেষ নিয়ম: চাটগাঁইয়া ভাষায় 'না' সাধারণত ক্রিয়ার আগে বসে
    // যেমন: "খাই না" -> "ন হাই"
    let result = translatedWords.join(" ");
    
    // সহজ কিছু অটোমেশন (Replace Logic)
    result = result.replace("আছি", "আছি");
    result = result.replace("যাব না", "ন যাইয়ুম");
    result = result.replace("খাব না", "ন খাইয়ুম");

    document.getElementById("outputText").value = result;
                                    }
