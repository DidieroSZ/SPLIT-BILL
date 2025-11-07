import { css } from "lit-element";

export default css`

    /* @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'); */
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: "Figtree", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    :root{
        --Negro: #232323;
    }



    .main--container{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #fcfcfc;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .d-flexx{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .d-col{
       flex-flow: column wrap;
    }
    .d-row{
       flex-flow: row wrap;
    }
    .border{
        border: solid 1px var(--Gris) !important;
    }

    .people--container{
        width: 70%;
        min-width: 500px;
        max-width: 800px;
        height: auto;
        background: var(--Blanco);
    }

`;