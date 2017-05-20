/**
 * Created by Vlad on 20.05.2017.
 */

module.exports = function (app) {

    var markersData = [
        {
            id: 'F487',
            lat: 50.914997,
            lng: 34.815783,
            name: "Camping Praia ewrewrewr da Barra",
            address1:"Rua Diogo Cão, 125",
            address2: "Praia da Barra",
            postalCode: "3830-772 Gafanha da Nazaré",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        },
        {
            id: '99E7',
            lat: 50.916557,
            lng: 34.805603,
            name: "Camping Costahre rew rew rewreh rehawerh Nova",
            address1:"Quinta dos Patos, n.º 2",
            address2: "Praia da Costa Nova",
            postalCode: "3830-453 Gafanha da Encarnação",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        },
        {
            id: '14W7',
            lat: 50.924857,
            lng: 34.805713,
            name: "Camping Gafanha dar e dghreghe Nazaré",
            address1:"Rua dos Balneários do Complexo Desportivo",
            address2: "Gafanha da Nazaré",
            postalCode: "3830-225 Gafanha da Nazaré",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        }
    ];
    var bugsData = [
        {
            id: 'F487',
            lat: 50.914997,
            lng: 34.815783,
            name: "Camping Praia ewrewrewr da Barra",
            address1:"Rua Diogo Cão, 125",
            address2: "Praia da Barra",
            postalCode: "3830-772 Gafanha da Nazaré",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        },
        {
            id: '99E7',
            lat: 50.916557,
            lng: 34.805603,
            name: "Camping Costahre rew rew rewreh rehawerh Nova",
            address1:"Quinta dos Patos, n.º 2",
            address2: "Praia da Costa Nova",
            postalCode: "3830-453 Gafanha da Encarnação",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        },
        {
            id: '14W7',
            lat: 50.924857,
            lng: 34.805713,
            name: "Camping Gafanha dar e dghreghe Nazaré",
            address1:"Rua dos Balneários do Complexo Desportivo",
            address2: "Gafanha da Nazaré",
            postalCode: "3830-225 Gafanha da Nazaré",
            pic:'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18519635_744023015775623_1423208266330624739_n.png?oh=2f3a5ad0388c550dfdef3ace857213e5&oe=59BA3CD4'
        }
    ];



    app.get('/getResentBugsData', (req, res) => {
       res.send(bugsData);
    });

    app.get('/getMarkersData', (req, res) => {
        res.send(markersData);
    });
};