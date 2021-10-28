//Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
//App Component
import { MyApp } from './app.component';
//Ionic Depndencies
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//Pages
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastraEnderecoPage } from '../pages/cadastro/cadastra-endereco/cadastra-endereco';
import { LoginPage } from '../pages/login/login';
import { VitrinePage } from '../pages/vitrine/vitrine';
import { ModalProdutoPage } from '../pages/modal-produto/modal-produto';
import { ModalEnderecoPage } from '../pages/modal-endereco/modal-endereco';
import { ProdutoPage } from '../pages/produto/produto';
import { CategoriasPage } from '../pages/produto/categorias/categorias';
import { PerfilPage } from '../pages/perfil/perfil';
import { EditarPerfilPage } from '../pages/perfil/editar-perfil/editar-perfil';
import { EnderecosCadastradosPage } from '../pages/perfil/enderecos-cadastrados/enderecos-cadastrados';
import { FormasPagamentoPage } from '../pages/perfil/formas-pagamento/formas-pagamento';
import { TotalPedidosPage } from '../pages/perfil/total-pedidos/total-pedidos';
import { MensagensPage } from '../pages/perfil/mensagens/mensagens';
import { NotificacoesPage } from '../pages/perfil/notificacoes/notificacoes';
import { ListPage } from '../pages/list/list';

//Providers
import { DataProvider } from '../providers/data/data';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ProdutoProvider } from '../providers/produto/produto';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { CartaoProvider } from '../providers/cartao/cartao';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';

//Funções que declara os provider do storage
function StorageUsuario() {
  return new Storage({
    name: 'simpls.db',
    storeName: 'usuario'
  });
}

@NgModule({
  declarations: [
    MyApp,
    //Boas Vindas, Cadastro e Login
    HomePage,
    WelcomePage,
    CadastroPage,
    CadastraEnderecoPage,
    LoginPage,
    //Vitrine
    VitrinePage,
    ModalProdutoPage,
    ModalEnderecoPage,
    //Produto
    ProdutoPage,
    CategoriasPage,
    //Perfil
    PerfilPage,
    EditarPerfilPage,
    EnderecosCadastradosPage,
    FormasPagamentoPage,
    TotalPedidosPage,
    MensagensPage,
    NotificacoesPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Boas Vindas, Cadastro e Login
    HomePage,
    WelcomePage,
    CadastroPage,
    CadastraEnderecoPage,
    LoginPage,
    //Vitrine
    VitrinePage,
    ModalProdutoPage,
    ModalEnderecoPage,
    //Produto
    ProdutoPage,
    CategoriasPage,
    //Perfil
    PerfilPage,
    EditarPerfilPage,
    EnderecosCadastradosPage,
    FormasPagamentoPage,
    TotalPedidosPage,
    MensagensPage,
    NotificacoesPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'StorageUsuario', useFactory: StorageUsuario },
    HttpClientModule,
    DataProvider,
    UsuarioProvider,
    ProdutoProvider,
    CategoriaProvider,
    CartaoProvider,
    CarrinhoProvider
  ]
})
export class AppModule {}
