$(function () {

    rangePickr = $('#OrderDate');

    if (rangePickr.length) {
        rangePickr.flatpickr({
            mode: 'range'
          });
      }


    var dt_responsive_table = $('.dt-responsive');

    if (dt_responsive_table.length) {
      var dt_responsive = dt_responsive_table.DataTable({
        ajax: {
          url: '/datatableCommandes',
          data :function (d) {
            d.status = $("#category").val();
            d.date = $("#OrderDate").val().split(' to ');
          },
        },
        bFilter: false,
        order: [[ 4, "desc" ]],
        processing: true,
        serverSide: true,
        pageLength: 10,
        columns: [
          { data: 'id' },
          { data: 'fullname' },
          { data: 'phone' },
          { data: 'total' },
          { data: 'startDate' },
          { data: 'state' },
          { data: 'fullname' },
        ],
        columnDefs: [
          {
            className: 'control',
            orderable: false,
            targets: 0
          },
          {
            // Label
            targets: -2,
            render: function (data, type, full, meta) {
            var $status_number =  full['state'];
            var $status = {
              0: { title: 'nouveau', class: 'badge-light-danger' },
              1: { title: 'en préparation', class: 'badge-light-primary' },
              2: { title: 'en route', class: 'badge-light-info' },
              3: { title: 'livrée', class: 'badge-light-success' },
              4: { title: 'annulée', class: 'badge-light-warning' }
            };
            if (typeof $status[$status_number] === 'undefined') {
                return data;
            }
            return (
                `<span class="badge badge-pill ${$status[$status_number].class}">
                    ${$status[$status_number].title}
                </span>`
                );
            },
          },
          {
            // Actions
            targets: -1,
            title: 'Actions',
            orderable: false,
            render: function (data, type, full, meta) {
              return (
                `<div class="d-inline-flex">
                    <a class="pr-1 dropdown-toggle hide-arrow text-primary" data-toggle="dropdown">
                        ${feather.icons['more-vertical'].toSvg({ class: 'font-small-4' })}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="/commandes/${full.id}" class="dropdown-item">
                            ${feather.icons['file-text'].toSvg({ class: 'mr-50 font-small-4' })}
                            Details
                        </a>
                    </div>
                </div>`
              );
            }
          }
        ],
        dom:
          '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (row) {
                var data = row.data();
                return 'Details of ' + data['full_name'];
              }
            }),
            type: 'column',
            renderer: $.fn.dataTable.Responsive.renderer.tableAll({
              tableClass: 'table'
            })
          }
        },
        language: {
          paginate: {
            // remove previous & next text from pagination
            previous: '&nbsp;',
            next: '&nbsp;'
          }
        }
      });
    }

    // Form Filter
    document.getElementById('searchFilter').onsubmit=(e)=>{
        e.preventDefault();
        dt_responsive.draw();
      }
    // // Filter form control to default size for all tables
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .custom-select').removeClass('custom-select-sm').removeClass('form-control-sm');
  });
