import string from "lodash-es/string";

interface Data {
    img: string;
    alt: string;
    title: string;
    year: string;
    month: string;
    day: string;
}

function gettingImg(userID: string): Promise<void> {
    let jokeImg = document.getElementById("joke") as HTMLImageElement;
    let info = document.getElementById("imgInfo") as HTMLElement;
    return fetch(`https://getxkcd.vercel.app/api/comic?num=${userID}`)
        .then(resp => resp.json())
        .then((data: Data) => {
            jokeImg.src = data.img;
            jokeImg.alt = data.alt;
            jokeImg.title = data.title;
            data.year = data.year.toString();
            data.month = data.month.toString() + '.';
            data.day = data.day.toString() + '.';
            //let date = new Date(Date.UTC(data.year, data.month - 1, data.day, 0, 0));
            //info.textContent = `${jokeImg.title} ${date.toLocaleDateString()}`;
            info.textContent = `${jokeImg.title} ${data.day}${data.month}${data.year}`;
        });
}

function fetchIdentifier(type?: string): Promise<void> {
    const params = new URLSearchParams();
    if (type) {
        params.append('email', type);
    }
    return fetch(`https://fwd.innopolis.app/api/hw2?${params.toString()}`)
        .then(r => r.text())
        .then(text => {
            return gettingImg(text);
        })
        .catch(() => console.log("Error!"));
}

const jsonObj = fetchIdentifier("d.melnikava@innopolis.university");