$(function () {
    var dt_responsive_table = $('.dt-responsive')
    if (dt_responsive_table.length) {
      var dt_responsive = dt_responsive_table.DataTable({
        bFilter: false,
        ajax: {
          url: '/users-datatable',
          data: function (d) {
            d.name = $('#name').val();
            d.email = $('#email').val();
          },
        },
        order: [[ "1", "desc" ]],
        processing: true,
        serverSide: true,
        pageLength: 10,
        columns: [
          { data: 'fullname' },
          { data: 'fullname' },
          { data: 'email' },
          { data: 'phone' },
          { data: 'orders_count' },
          { data: "is_admin" },
          { data: 'id' },
        ],
        columnDefs: [
          {
            className: 'control',
            orderable: false,
            targets: 0
          },
          {
            // Label
            targets:-2,
            render: function (data, type, full, meta) {
                switch (data) {
                    case 1:
                        return (
                            `<span class="badge badge-pill badge-light-danger">
                                Admin
                            </span> `
                        )
                        break;
                    case 0:
                        return (
                            `<span class="badge badge-pill badge-light-success">
                                Client
                            </span> `
                        )
                        break;
                    default:
                        return data;
                        break;
                }
                return `${data} MAD`
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
                        <a href="/products/${full.id}/edit" class="dropdown-item">
                            ${feather.icons['file-text'].toSvg({ class: 'mr-50 font-small-4' })}
                            Details
                        </a>
                        <span product=${full.id} id="removeProduct" class="dropdown-item delete-record">
                            ${feather.icons['trash-2'].toSvg({ class: 'mr-50 font-small-4' })}
                            Supprimer
                        </span>
                    </div>
                </div>`
              );
            }
          },
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
          "lengthMenu": "Affichage _MENU_ enregistrements par page",
          paginate: {
            // remove previous & next text from pagination
            previous: '&nbsp;',
            next: '&nbsp;'
          }
        }
      });

      document.getElementById('searchFilter').onsubmit=(e)=>{
        e.preventDefault();
        dt_responsive.draw()
      }
      document.getElementById('sendRemove').onclick=(e)=>{
        console.log(e.target.getAttribute('product'),"Remove")
          axios.delete(`/products/${e.target.getAttribute('product')}`)
          .then(res =>{
            $('#danger').modal('hide')
            dt_responsive.draw()
          })
          .catch(err=>console.log(err))
      }

    }

    // // Filter form control to default size for all tables
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .custom-select').removeClass('custom-select-sm').removeClass('form-control-sm');

  });

$(document).on("click",".dt-responsive tbody tr td #removeProduct", function(e) {
    document.getElementById('sendRemove').setAttribute("product",e.target.getAttribute('product'))
    $('#danger').modal({
      dismissible: true
    });
});

