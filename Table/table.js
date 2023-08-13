$(function() {
    const data = [
        {
            name: "Primero",
            value: 1000,
            importe: 150000
        },
        {
            name: "Segundo",
            value: 800,
            importe: 120000
        },
        {
            name: "Tercero",
            value: 1200,
            importe: 180000
        },
        {
            name: "Cuarto",
            value: 750,
            importe: 112500
        },
        {
            name: "Quinto",
            value: 900,
            importe: 135000
        },
        {
            name: "Sexto",
            value: 1100,
            importe: 165000
        },
        {
            name: "Séptimo",
            value: 950,
            importe: 142500
        },
        {
            name: "Octavo",
            value: 1050,
            importe: 157500
        },
        {
            name: "Noveno",
            value: 800,
            importe: 120000
        },
        {
            name: "Décimo",
            value: 950,
            importe: 142500
        },
        {
            name: "Undécimo",
            value: 1100,
            importe: 165000
        },
        {
            name: "Duodécimo",
            value: 850,
            importe: 127500
        },
        {
            name: "Decimotercero",
            value: 900,
            importe: 135000
        },
        {
            name: "Decimocuarto",
            value: 1300,
            importe: 195000
        },
        {
            name: "Decimoquinto",
            value: 950,
            importe: 142500
        },
        {
            name: "Decimosexto",
            value: 1150,
            importe: 172500
        },
        {
            name: "Decimoséptimo",
            value: 1000,
            importe: 150000
        },
        {
            name: "Decimoctavo",
            value: 800,
            importe: 120000
        },
        {
            name: "Decimonoveno",
            value: 1200,
            importe: 180000
        },
        {
            name: "Vigésimo",
            value: 750,
            importe: 112500
        },
        {
            name: "Vigésimo primero",
            value: 900,
            importe: 135000
        },
        {
            name: "Vigésimo segundo",
            value: 1100,
            importe: 165000
        },
        {
            name: "Vigésimo tercero",
            value: 950,
            importe: 142500
        },
        {
            name: "Vigésimo cuarto",
            value: 1050,
            importe: 157500
        },
        {
            name: "Vigésimo quinto",
            value: 800,
            importe: 120000
        },
        {
            name: "Vigésimo sexto",
            value: 950,
            importe: 142500
        },
        {
            name: "Vigésimo séptimo",
            value: 1100,
            importe: 165000
        },
        {
            name: "Vigésimo octavo",
            value: 850,
            importe: 127500
        },
        {
            name: "Vigésimo noveno",
            value: 900,
            importe: 135000
        },
        {
            name: "Trigésimo",
            value: 1300,
            importe: 195000
        },
    ];
    const columnData = [
        {
            title: "Nombre",
            style: {
                "text-align": "left",
                "font-weight": "bold",
                "width": "50%",
            },
        },
        {
            title: "Cantidad",
            style: {
                "text-align": "right",
                "width": "25%",
            },
            
        },
        {
            title: "Importe",
            style: {
                "text-align": "right",
                "width": "25%",
            },
            
        }
    ];

    dorTable("#table-container", {
        items: data,
        pagination: 5,
        columns: columnData,
    });
});

function dorTable(domElement, map) {
    const pagination = map.pagination;
    const originalData = map.items;
    var data = originalData;
    const columns = map.columns;
    const width = map.width;

    const tableContainer = $("<div>", {
        class: "dor-table-container",
    });

    const table = $("<table>", {
        class: "dor-table",
    }).attr("data-dor-table-page", 0);

    const controls = $("<div>", {
        class: "dor-table-controls",
    });

    const firstPage = $("<div>", {
        class: "dor-table-controls-button",
        html: `<span class="material-symbols-outlined">first_page</span>`,
    }).on("click", () => {
        dorLoadTable(0);
    });
    const before = $("<div>", {
        class: "dor-table-controls-button",
        html: `<span class="material-symbols-outlined">navigate_before</span>`,
    }).on("click", () => {
        const page = table.attr("data-dor-table-page");
        if (page != 0) dorLoadTable(page - 1);
    });

    const next = $("<div>", {
        class: "dor-table-controls-button",
        html: `<span class="material-symbols-outlined">navigate_next</span>`,
    }).on("click", () => {
        const page = table.attr("data-dor-table-page");
        if (page < data.length / pagination - 1) {
            dorLoadTable(Math.floor(page) + 1);
        }
    });
    const lastPage = $("<div>", {
        class: "dor-table-controls-button",
        html: `<span class="material-symbols-outlined">last_page</span>`,
    }).on("click", () => {
        dorLoadTable(data.length / pagination - 1);
    });

    const navigation = $("<div>", {
        class: "dor-table-controls-navigation"
    });

    for (let i = 0; i < data.length / pagination; i++) {
        const navigationLink = $("<span>", {
            class: "dor-table-controls-navigation-link",
            text: i,
        }).on("click", () => {
            dorLoadTable(i);
        });
        navigation.append(navigationLink);
    }

    controls.append(firstPage);
    controls.append(before);
    controls.append(navigation);
    controls.append(next);
    controls.append(lastPage);

    tableContainer.append(table);
    tableContainer.append(controls);
    $(domElement).append(tableContainer);

    dorLoadTable(0);
    
    function dorLoadTable(page) {

        // TODO : Generar enlaces dinámicamente en función 
        // del actual. 2 ( o 3? ) hacia delante y 2 hacia atrás 
        // ( si es posible )

        firstPage.removeClass("unactive");
            before.removeClass("unactive");
            lastPage.removeClass("unactive");
            next.removeClass("unactive");
        if (page === 0) {
            firstPage.addClass("unactive");
            before.addClass("unactive");
        }
        console.log(page);
        console.log(data.length / pagination - 1);
        if (page >= data.length / pagination - 1) {
            lastPage.addClass("unactive");
            next.addClass("unactive");
        }

        table.empty();

        table.attr("data-dor-table-page", page);

        const tableHead = $("<tr>", {
            class: "dor-table-head",
        });
        columns.forEach(function (el, i) {
            const tableColumnHead = $("<th>", {
                class: "dor-table-head-cell",
                text: el.title.toUpperCase(),
            }).on("click", () => {
                dorSortTable(i);
            }).css(el.style);
            tableHead.append(tableColumnHead);
        });

        table.append(tableHead);

        for (let i = 0 + (pagination * page); i < pagination + (pagination * page); i++) {
            if (i > data.length - 1) break;
            const row = data[i];
            const tableRow = $("<tr>", {
                class: "dor-table-row",
            });

            columns.forEach(function(el, i) {
                const cell = $("<td>", {
                    class: "dor-table-row-cell",
                    text: row[Object.keys(row)[i]],
                }).css(el.style);
                tableRow.append(cell);
            });
            table.append(tableRow);
        }

        const links = navigation.children(".dor-table-controls-navigation-link");
        links.removeClass("active");
        links.eq(page).addClass("active");
    }

    function dorSortTable(index) {
        // Filtro ascendente o descendente para toggle.
        var asc = table.attr("data-dor-table-filter-asc") ?? "false";
        if (asc === "false") {
            table.attr("data-dor-table-filter-asc", "true");
        } else {
            table.attr("data-dor-table-filter-asc", "false");
            asc = "true";
        }
        

        data = data.sort(function(a, b) {
            var fieldA = a[Object.keys(a)[index]];
            var fieldB = b[Object.keys(b)[index]];
            var holder;
            
            if (asc === "false") {
                holder = fieldA;
                fieldA = fieldB;
                fieldB = holder;
            }
            
            if (fieldA < fieldB) {
                return -1;
              }
              if (fieldA > fieldB) {
                return 1;
              }
              return 0;
        });

        const currentPage = table.attr("data-dor-table-page");
        dorLoadTable(currentPage);
    }
}