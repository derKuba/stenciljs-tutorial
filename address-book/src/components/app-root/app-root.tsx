import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {

    const head = ["id", "Name", "Vorname"];
    const body = [
      ["1", "Max", "Muster"],
      ["2", "Maxine", "Muster"],
      ["3", "Momo", "Muster"],
    ];

    return (
      <div>
        <header>
          <h1>Adressbuch</h1>
        </header>

        <main>
          <h2>Tabelle Slot-Variante</h2>
          <kuba-table-slot>
            <tr slot="table-head">
              <th>id</th>
              <th>Name</th>
              <th>Vorname</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Max</td>
              <td>Muster</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Maxine</td>
              <td>Muster</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Momo</td>
              <td>Muster</td>
            </tr>
          </kuba-table-slot>
          <hr />

          <h2>Tabelle Attributes-Variante</h2>
          <kuba-table-attributes head={head} body={body} />
          <hr />


          <h2>Tabelle Options-Variante</h2>
          <kuba-table-options>

            <kuba-table-options-head>
              <option value="id" />
              <option value="name" />
              <option value="vorname" />
            </kuba-table-options-head>

            <kuba-table-options-body>
              <option value="1" />
              <option value="Max" />
              <option value="Muster" />

              <option value="2" />
              <option value="Maxine" />
              <option value="Muster" />

              <option value="3" />
              <option value="Max" />
              <option value="Muster" />
            </kuba-table-options-body>

          </kuba-table-options>
          <hr />

          {/* <kuba-address-form></kuba-address-form> */}
        </main>

        {/* 
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
       */}
      </div>
    );
  }
}
