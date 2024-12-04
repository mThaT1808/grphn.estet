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


    const content = document.createElement('section');

    // Инициализируйте маркер
    const marker = new YMapMarker(
      {
        coordinates: [44.006516, 56.322797],
        draggable: true
      },
      content
    );
    
    // Добавьте маркер на карту
    map.addChild(marker);
    
    // Добавьте произвольную HTML-разметку внутрь содержимого маркера
    content.innerHTML = '<h1>Этот заголовок можно перетаскивать</h1>';
    // style=tags.any:road|elements:geometry|stylers.color:ffffff~tags.all:water|elements:geometry|stylers.color:999999~types:polygon|tags.any:admin;urban_area;poi;landscape|stylers.color:f0f0f0
}