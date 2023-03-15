<script lang="ts">
interface Data {
        img: string;
        alt: string;
        title: string;
        year: string;
        month: string;
        day: string;
    }

    async function gettingImg(userID: string): Promise<void> {
        let jokeImg = document.getElementById("joke") as HTMLImageElement;
        let img_content = document.getElementById("imgInfo") as HTMLElement;
        const resp = await fetch(`https://getxkcd.vercel.app/api/comic?num=${userID}`);
        const data: Data = await resp.json();
        jokeImg.src = data.img;
        jokeImg.alt = data.alt;
        jokeImg.title = data.title;
        data.year = data.year.toString();
        data.month = data.month.toString() + '.';
        data.day = data.day.toString() + '.';
        img_content.textContent = `${jokeImg.title} ${data.day}${data.month}${data.year}`;
    }
    async function fetchIdentifier(type?: string): Promise<void> {
        const params = new URLSearchParams();
        if (type) {
            params.append('email', type);
        }
        try {
            const response = await fetch(`https://fwd.innopolis.app/api/hw2?${params.toString()}`);
            const text = await response.text();
            await gettingImg(text);
        } 
        catch (error) {
            console.log("Error!");}
    }
    const img_description = fetchIdentifier("d.melnikava@innopolis.university");
</script>

<br>
<div class="jokeImg">
  <img id="joke" alt ="">
  <figure>
    <figcaption id="imgInfo"></figcaption>
  </figure>
</div>

<style>
    .jokeImg {
        width: 27%;
        height: 22%;
        padding-left: 43%;
    }
    .jokeImg figcaption
    {
        color: rgb(0, 0, 0);
        margin-right: 20%;
        float: right;
        font-family: Snell Roundhand, cursive;
    }
</style>