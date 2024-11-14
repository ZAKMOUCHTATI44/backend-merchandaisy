$(function () {
    var isRtl = $('html').attr('data-textdirection') === 'rtl';

    var dt_ajax_table = $('.datatables-ajax'),
      dt_filter_table = $('.dt-column-search'),
      dt_adv_filter_table = $('.dt-advanced-search'),
      dt_responsive_table = $('.dt-responsive'),
      assetPath = '../../../app-assets/';

    if ($('body').attr('data-framework') === 'laravel') {
      assetPath = $('body').attr('data-asset-path');
    }

    // Ajax Sourced Server-side
    // --------------------------------------------------------------------

    if (dt_ajax_table.length) {
      var dt_ajax = dt_ajax_table.dataTable({
        processing: true,
        dom:
          '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        ajax: assetPath + 'data/ajax.php',
        language: {
          paginate: {
            // remove previous & next text from pagination
            previous: '&nbsp;',
            next: '&nbsp;'
          }
        }
      });
    }

    // Column Search
    // --------------------------------------------------------------------

    if (dt_filter_table.length) {
      // Setup - add a text input to each footer cell
      $('.dt-column-search thead tr').clone(true).appendTo('.dt-column-search thead');
      $('.dt-column-search thead tr:eq(1) th').each(function (i) {
        var title = $(this).text();
        $(this).html('<input type="text" class="form-control form-control-sm" placeholder="Search ' + title + '" />');

        $('input', this).on('keyup change', function () {
          if (dt_filter.column(i).search() !== this.value) {
            dt_filter.column(i).search(this.value).draw();
          }
        });
      });

      var dt_filter = dt_filter_table.DataTable({
        ajax: assetPath + 'data/table-datatable.json',
        columns: [
          { data: 'full_name' },
          { data: 'email' },
          { data: 'post' },
          { data: 'city' },
          { data: 'start_date' },
          { data: 'salary' }
        ],
        dom:
          '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        orderCellsTop: true,
        language: {
          paginate: {
            // remove previous & next text from pagination
            previous: '&nbsp;',
            next: '&nbsp;'
          }
        }
      });
    }

    // Advanced Search
    // --------------------------------------------------------------------

    // Advanced Filter table
    if (dt_adv_filter_table.length) {
      var dt_adv_filter = dt_adv_filter_table.DataTable({
        ajax: assetPath + 'data/table-datatable.json',
        columns: [
          { data: 'responsive_id' },
          { data: 'full_name' },
          { data: 'email' },
          { data: 'post' },
          { data: 'city' },
          { data: 'start_date' },
          { data: 'salary' }
        ],

        columnDefs: [
          {
            className: 'control',
            orderable: false,
            targets: 0
          }
        ],
        dom:
          '<"d-flex justify-content-between align-items-center mx-0 row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>t<"d-flex justify-content-between mx-0 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        orderCellsTop: true,
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

    // on key up from input field
    $('input.dt-input').on('keyup', function () {
      filterColumn($(this).attr('data-column'), $(this).val());
    });

    // Responsive Table
    // --------------------------------------------------------------------

    if (dt_responsive_table.length) {
      var dt_responsive = dt_responsive_table.DataTable({
        ajax: "/contactDatatable",
        columns: [
          { data: 'id' },
          { data: 'email' },
          { data: 'objet' },
          { data: 'profile' },
          { data: 'message' },
          { data: 'startDate' }
        ],
        columnDefs: [
          {
            className: 'control',
            orderable: false,
            targets: 0
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
          paginate: {
            // remove previous & next text from pagination
            previous: '&nbsp;',
            next: '&nbsp;'
          }
        }
      });
    }

    // // Filter form control to default size for all tables
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .custom-select').removeClass('custom-select-sm').removeClass('form-control-sm');
  });
