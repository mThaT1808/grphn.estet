initMap();
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [44.006516, 56.322797],

                // Уровень масштабирования
                zoom: 14
            }
        }
    );

    map.addChild(new YMapDefaultFeaturesLayer());

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer({
        customization: [
            {
                tags: {
                    any: ['road']
                },
                elements: 'geometry',
                stylers: [
                    {
                        color: '#ffffff'
                    }
                ]
            },
            {
                tags: {
                    all: ['water']
                },
                elements: 'geometry',
                stylers: [
                    {
                        color: '#999999'
                    }
                ]
            },
            {
                types: 'polygon',
                tags: {
                    any: ['admin', 'urban_area', 'poi', 'landscape']
                },
                stylers: [
                    {
                        color: '#f0f0f0'
                    }
                ]
            }
        ]
    }));


    const content = document.createElement('div');

    try {
        let response = await fetch('http://localhost:4000/api/offices', {
            method: 'get',
        });
        let offices = await response.json()
        // console.log(offices);
        for (let office of offices.items) {
            createMarker(office);
        }
      } catch (event){
        alert(event.message);
        // console.log(event.message);
      }

    // Инициализируйте маркер
    function createMarker (office) {
        const template = document.getElementById('pinTemplate');
        const clone = template.content.cloneNode(true);
        console.log(template, clone, office)
        const addresLink = clone.querySelector('.map__addres').querySelector('.link--map');
        addresLink.textContent = office.addres;
        addresLink.setAttribute('href', office.site);
        const numberLink = clone.querySelector('.map__phone').querySelector('.link--map');
        numberLink.textContent = office.phone;
        numberLink.setAttribute('href', `tel:${office.phone}`);

        const marker = new YMapMarker(
            {
                coordinates: [office.coordinates.latitude, office.coordinates.longitude],
            },
            clone
        );
        // content.innerHTML = '<div style="width:30px;height:30px;background-color:green;"></div>';
        map.addChild(marker);
    }
}

