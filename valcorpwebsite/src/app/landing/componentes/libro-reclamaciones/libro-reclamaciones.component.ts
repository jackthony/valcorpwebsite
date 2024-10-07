import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { filter } from 'rxjs/operators';  // Necesitamos 'filter' para evitar entradas repetitivas
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../../layout/alert/alert.component';
import { ChangeDetectorRef } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NotificacionComponent } from '../../../layout/notificacion/notificacion.component';

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    MatInputModule, MatSelectModule, MatFormFieldModule,
    MatButtonModule, MatTooltipModule, NotificacionComponent,
    MatSpinner, FormsModule, MatRadioModule, MatCardModule, MatCheckboxModule,NotificacionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './libro-reclamaciones.component.html',
  styleUrls: ['./libro-reclamaciones.component.css']
})
export default class LibroReclamacionesComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  @Input() mostrarNotificacion: boolean = false;
  mostrarNotiError!: boolean;
  reclamoForm: FormGroup;
  loading: boolean = false;

  // Mapeo de departamentos, provincias y distritos
  departamentos: { [key: string]: { [key: string]: string[] } } = {
    'Amazonas': {
      'Chachapoyas': ['Chachapoyas', 'Asunción', 'Balsas', 'Cheto', 'Chiliquín', 'Chuquibamba', 'Granada', 'Huancas', 'La Jalca', 'Leimebamba', 'Levanto', 'Magdalena', 'Mariscal Castilla', 'Molino Pampa', 'Montevideo', 'Olleros', 'Quinjalca', 'San Francisco de Daguas', 'San Isidro de Maino', 'Soloco', 'Sonche'],
      'Bagua': ['Bagua', 'Aramango', 'Copallin', 'El Parco', 'Imaza (Chiriaco)', 'La Peca'],
      'Bongara': ['Jumbilla', 'Chisquilla', 'Churuja', 'Corosha', 'Cuispes', 'Florida', 'Jazán', 'Recta', 'San Carlos', 'Shipasbamba', 'Valera', 'Yambrasbamba'],
      'Condorcanqui': ['Santa María de Nieva', 'El Cenepa', 'Río Santiago'],
      'Luya': ['Lamud', 'Camporredondo', 'Cocabamba', 'Colcamar', 'Conila', 'Inguilpata', 'Longuita', 'Lonya Chico', 'Luya', 'Luya Viejo', 'María', 'Ocalli', 'Ocumal', 'Pisuquia', 'Providencia', 'San Cristóbal', 'San Francisco de Yeso', 'San Jerónimo', 'San Juan de Lopecancha', 'Santa Catalina', 'Santo Tomas', 'Tingo', 'Trita'],
      'Rodríguez de Mendoza': ['San Nicolás', 'Chirimoto', 'Cochamal', 'Huambo', 'Limabamba', 'Longar', 'Mariscal Benavides', 'Milangos', 'Omia', 'Santa Rosa', 'Totora', 'Vista Alegre'],
      'Utcubamba': ['Bagua Grande', 'Cajaruro', 'Cumba', 'El Milagro', 'Jamalca', 'Lonya Grande', 'Yamón']
    },
    'Áncash': {
      'Huaraz': ['Huaraz', 'Cochabamba', 'Colcabamba', 'Huanchay', 'Independencia', 'Jangas', 'La Libertad', 'Olleros', 'Pampas Grande', 'Pariacoto', 'Pira', 'Tarica'],
      'Aija': ['Aija', 'Coris', 'Huacllán', 'La Merced', 'Succha'],
      'Antonio Raymondi': ['Llamellín', 'Aczo', 'Chaccho', 'Chingas', 'Mirgas', 'San Juan de Rontoy'],
      'Asunción': ['Chacas', 'Acochaca'],
      'Bolognesi': ['Chiquián', 'Abelardo Pardo Lezameta', 'Antonio Raymondi', 'Aquia', 'Cajacay', 'Canis', 'Colquioc', 'Huallanca', 'Huasta', 'Huayllacayán', 'La Primavera', 'Mangas', 'Pacllón', 'San Miguel de Corpanqui', 'Ticllos'],
      'Carhuaz': ['Carhuaz', 'Acopampa', 'Amashca', 'Anta', 'Ataquero', 'Marcara', 'Pariahuanca', 'San Miguel de Aco', 'Shilla', 'Tinco', 'Yungar'],
      'Carlos Fermín Fitzcarrald': ['San Luis', 'San Nicolás', 'Yauya'],
      'Casma': ['Casma', 'Buena Vista Alta', 'Comandante Noel', 'Yaután'],
      'Corongo': ['Corongo', 'Aco', 'Bambas', 'Cusca', 'La Pampa', 'Yanac', 'Yupan'],
      'Huari': ['Huari', 'Anra', 'Cajay', 'Chavín de Huantar', 'Huacachi', 'Huacchis', 'Huántar', 'Masin', 'Paucas', 'Ponto', 'Rahuapampa', 'Rapayán', 'San Marcos', 'San Pedro de Chaná', 'Uco'],
      'Huarmey': ['Huarmey', 'Cochapeti', 'Culebras', 'Huayan', 'Malvas'],
      'Mariscal Luzuriaga': ['Piscobamba', 'Casca', 'Eleazar Guzmán Barrón', 'Fidel Olivas Escudero', 'Llama', 'Llumpa', 'Lucma', 'Musga'],
      'Ocros': ['Ocros', 'Acas', 'Cajamarquilla', 'Carhuapampa', 'Cochas', 'Congas', 'Llipa', 'San Cristóbal de Rajan', 'San Pedro', 'Santiago de Chilcas'],
      'Pallasca': ['Cabana', 'Bolognesi', 'Conchucos', 'Huacaschuque', 'Huandoval', 'Lacabamba', 'Llapo', 'Pallasca', 'Pampas', 'Santa Rosa', 'Tauca'],
      'Pomabamba': ['Pomabamba', 'Huayllán', 'Parobamba', 'Quinuabamba'],
      'Recuay': ['Recuay', 'Catac', 'Cotaparaco', 'Huayllapampa', 'Llacllín', 'Marca', 'Pampas Chico', 'Pararín', 'Tapacocha', 'Ticapampa'],
      'Santa': ['Chimbote', 'Cáceres del Perú', 'Coishco', 'Macate', 'Moro', 'Nepeña', 'Samanco', 'Santa','Nuevo Chimbote'],
      'Sihuas': ['Sihuas', 'Acobamba', 'Alfonso Ugarte', 'Cashapampa', 'Chingalpo', 'Huayllabamba', 'Quiches', 'Ragash', 'San Juan', 'Sicsibamba'],
      'Yungay': ['Yungay', 'Cascapara', 'Mancos', 'Matacoto', 'Quillo', 'Ranrahirca', 'Shupluy', 'Yanama']
    },
    'Apurímac': {
      'Abancay': ['Abancay', 'Chacoche', 'Circa', 'Curahuasi', 'Huanipaca', 'Lambrama', 'Pichirhua', 'San Pedro de Cachora', 'Tamburco'],
      'Andahuaylas': ['Andahuaylas', 'Andarapa', 'Chiara', 'Huancarama', 'Huancaray', 'Huayana', 'Kaquiabamba', 'Kishuara', 'Pacobamba', 'Pacucha', 'Pampachiri', 'Pomacocha', 'San Antonio de Cachi', 'San Jerónimo', 'San Miguel de Chaccrampa', 'Santa María de Chicmo', 'Talavera', 'Tumay Huaraca', 'Turpo'],
      'Antabamba': ['Antabamba', 'El Oro', 'Huaquirca', 'Juan Espinoza Medrano', 'Oropesa', 'Pachaconas', 'Sabaino'],
      'Aymaraes': ['Chalhuanca', 'Capaya', 'Caraybamba', 'Chapimarca', 'Colcabamba', 'Cotaruse', 'Huayllo', 'Justo Apu Sahuaraura', 'Lucre', 'Pocohuanca', 'San Juan de Chacña', 'Sañayca', 'Soraya', 'Tapairihua', 'Tintay', 'Toraya', 'Yanaca'],
      'Cotabambas': ['Tambobamba', 'Cotabambas', 'Coyllurqui', 'Haquira', 'Mara', 'Challhuahuacho'],
      'Chincheros': ['Chincheros', 'Anco-Huallo', 'Cocharcas', 'Huaccana', 'Ocobamba', 'Ongoy', 'Ranracancha', 'Uranmarca'],
      'Grau': ['Chuquibambilla', 'Curpahuasi', 'Gamarra', 'Huayllati', 'Mamara', 'Micaela Bastidas', 'Pataypampa', 'Progreso', 'San Antonio', 'Santa Rosa', 'Turpay', 'Vilcabamba', 'Virundo']
    },
    'Arequipa': {
      'Arequipa': ['Arequipa', 'Alto Selva Alegre', 'Cayma', 'Cerro Colorado', 'Characato', 'Chiguata', 'Jacobo Hunter', 'La Joya', 'Mariano Melgar', 'Miraflores', 'Mollebaya', 'Paucarpata', 'Pocsi', 'Polobaya', 'Quequeña', 'Sabandía', 'Sachaca', 'San Juan de Siguas', 'San Juan de Tarucani', 'Santa Isabel de Siguas', 'Santa Rita de Siguas', 'Socabaya', 'Tiabaya', 'Uchumayo', 'Vítor', 'Yarabamba', 'Yanahuara', 'Yura'],
      'Camaná': ['Camaná', 'José María Quimper', 'Mariano Nicolás Valcárcel', 'Mariscal Cáceres', 'Nicolás de Piérola', 'Ocoña', 'Quilca'],
      'Caravelí': ['Atico', 'Atiquipa', 'Bella Unión', 'Cahuacho', 'Caravelí', 'Chala', 'Chaparra', 'Huanuhuanu', 'Jaqui', 'Lomas', 'Quicacha', 'Yauca'],
      'Castilla': ['Aplao', 'Andagua', 'Ayo', 'Chachas', 'Chilcaymarca', 'Choco', 'Huancarqui', 'Machaguay', 'Orcopampa', 'Pampacolca', 'Tipán', 'Uñón', 'Uraca', 'Viraco'],
      'Caylloma': ['Chivay', 'Achoma', 'Cabanaconde', 'Callalli', 'Caylloma', 'Coporaque', 'Huambo', 'Huanca', 'Ichupampa', 'Lari', 'Lluta', 'Maca', 'Madrigal', 'San Antonio de Chuca', 'Sibayo', 'Tapay', 'Tisco', 'Tuti', 'Yanque'],
      'Condesuyos': ['Chuquibamba', 'Andaray', 'Cayarani', 'Chichas', 'Iray', 'Río Grande', 'Salamanca', 'Yanaquihua'],
      'Islay': ['Mollendo', 'Cocachacra', 'Dean Valdivia', 'Islay', 'Mejía', 'Punta de Bombón'],
      'La Unión': ['Cotahuasi', 'Alca', 'Charcana', 'Huaynacotas', 'Pampamarca', 'Puyca', 'Quechualla', 'Sayla', 'Tauría', 'Tomepampa', 'Toro']
    },
    'Ayacucho': {
      'Huamanga': ['Ayacucho', 'Acocro', 'Acos Vinchos', 'Andrés Avelino Cáceres Dorregaray', 'Carmen Alto', 'Chocollo', 'Chuschi', 'Cangallo', 'San Juan Bautista', 'San Miguel'],
      'Cangallo': ['Cangallo', 'Chuschi', 'Los Morochucos', 'Paras', 'Totos'],
      'Huanca Sancos': ['Huanca Sancos', 'Carapo', 'Sacsamarca', 'Santiago de Lucanamarca'],
      'Huanta': ['Huanta', 'Ayahuanco', 'Huamanguilla', 'Iguain', 'Llochegua', 'Luricocha', 'Santillana', 'Sivia'],
      'La Mar': ['San Miguel', 'Anco', 'Ayna', 'Chilcas', 'Chungui', 'Luis Carranza', 'Santa Rosa', 'Tambo'],
      'Lucanas': ['Puquio', 'Aucara', 'Cabana', 'Carmen Salcedo', 'Chaviña', 'Chipao', 'Huac-Huas', 'Laramate', 'Leoncio Prado', 'Llauta', 'Ocaña', 'Otoca', 'Saisa', 'San Cristóbal', 'San Juan', 'San Pedro', 'San Pedro de Palco', 'Sancos', 'Santa Ana de Huaycahuacho', 'Santa Lucia'],
      'Parinacochas': ['Coracora', 'Chumpi', 'Coronel Castañeda', 'Pacapausa', 'Pullo', 'Puyusca', 'San Francisco de Ravacayco', 'Upahuacho'],
      'Páucar del Sara Sara': ['Pausa', 'Colta', 'Corculla', 'Lampa', 'Marcabamba', 'Oyolo', 'Pararca', 'San Javier de Alpabamba', 'San José de Ushua', 'Sara Sara'],
      'Sucre': ['Querobamba', 'Belén', 'Chalcos', 'Chilcayoc', 'Huacaña', 'Morcolla', 'Paico', 'San Pedro de Larcay', 'San Salvador de Quije', 'Santiago de Paucaray', 'Soras'],
      'Víctor Fajardo': ['Huancapi', 'Alcamenca', 'Apongo', 'Asquipata', 'Canaria', 'Cayara', 'Colca', 'Huamanquiquia', 'Huancaraylla', 'Huaya', 'Sarhua', 'Vilcanchos'],
      'Vilcas Huamán': ['Vilcas Huamán', 'Accomarca', 'Carhuanca', 'Concepción', 'Huambalpa', 'Independencia', 'Saurama', 'Vischongo']
    },
    'Cajamarca': {
      'Cajamarca': ['Cajamarca', 'Asunción', 'Chetilla', 'Cospán', 'Jesús', 'La Encañada', 'Los Baños del Inca', 'Magdalena', 'Matara', 'Namora', 'San Juan'],
      'Cajabamba': ['Cajabamba', 'Cachachi', 'Condebamba', 'Sitacocha'],
      'Celendín': ['Celendín', 'Chumuch', 'Cortegana', 'Huasmin', 'Jorge Chávez', 'José Gálvez', 'La Libertad de Pallán', 'Miguel Iglesias', 'Oxamarca', 'Sorochuco', 'Sucre', 'Utco'],
      'Chota': ['Chota', 'Anguía', 'Chadin', 'Chalamarca', 'Chiguirip', 'Chimban', 'Choropampa', 'Cochabamba', 'Conchán', 'Huambos', 'Lajas', 'Llama', 'Miracosta', 'Paccha', 'Pion', 'Querocoto', 'San Juan de Licupis', 'Tacabamba', 'Tocmoche'],
      'Contumazá': ['Contumazá', 'Chilete', 'Cupisnique', 'Guzmango', 'San Benito', 'Santa Cruz de Toledo', 'Tantarica', 'Yonan'],
      'Cutervo': ['Cutervo', 'Callayuc', 'Choros', 'Cujillo', 'La Ramada', 'Pimpingos', 'Querocotillo', 'San Andrés de Cutervo', 'San Juan de Cutervo', 'San Luis de Lucma', 'Santa Cruz', 'Santo Domingo de la Capilla', 'Santo Tomás', 'Socota', 'Toribio Casanova'],
      'Hualgayoc': ['Bambamarca', 'Chugur', 'Hualgayoc'],
      'Jaén': ['Jaén', 'Bellavista', 'Chontalí', 'Colasay', 'Huabal', 'Las Pirias', 'Pomahuaca', 'Pucará', 'Sallique', 'San Felipe', 'San José del Alto', 'Santa Rosa'],
      'San Ignacio': ['San Ignacio', 'Chirinos', 'Huarango', 'La Coipa', 'Namballe', 'San José de Lourdes', 'Tabaconas'],
      'San Marcos': ['Pedro Gálvez', 'Chancay', 'Eduardo Villanueva', 'Gregorio Pita', 'Ichocán', 'José Manuel Quiroz', 'José Sabogal'],
      'San Miguel': ['San Miguel', 'Bolívar', 'Calquis', 'Catilluc', 'El Prado', 'La Florida', 'Llapa', 'Nanchoc', 'Niepos', 'San Gregorio', 'San Silvestre de Cochan', 'Tongod', 'Unión Agua Blanca'],
      'San Pablo': ['San Pablo', 'San Bernardino', 'San Luis', 'Tumbaden'],
      'Santa Cruz': ['Santa Cruz', 'Andabamba', 'Catache', 'Chancaybaños', 'La Esperanza', 'Ninabamba', 'Pulan', 'Saucepampa', 'Sexi', 'Uticyacu', 'Yauyucan']
    },
    'Cusco': {
      'Cusco': ['Cusco', 'Ccorca', 'Poroy', 'San Jerónimo', 'San Sebastián', 'Santiago', 'Saylla', 'Wanchaq'],
      'Acomayo': ['Acomayo', 'Acopia', 'Acos', 'Mosoc Llacta', 'Pomacanchi', 'Rondocan', 'Sangarará'],
      'Anta': ['Anta', 'Ancahuasi', 'Cachimayo', 'Chinchaypujio', 'Huarocondo', 'Limatambo', 'Mollepata', 'Pucyura', 'Zurite'],
      'Calca': ['Calca', 'Coya', 'Lamay', 'Lares', 'Pisac', 'San Salvador', 'Taray', 'Yanatile'],
      'Canas': ['Yanaoca', 'Checca', 'Kunturkanki', 'Langui', 'Layo', 'Pampamarca', 'Quehue', 'Túpac Amaru'],
      'Canchis': ['Sicuani', 'Checacupe', 'Combapata', 'Marangani', 'Pitumarca', 'San Pablo', 'San Pedro', 'Tinta'],
      'Chumbivilcas': ['Santo Tomás', 'Capacmarca', 'Chamaca', 'Colquemarca', 'Livitaca', 'Llusco', 'Quiñota', 'Velille'],
      'Espinar': ['Espinar', 'Condoroma', 'Coporaque', 'Ocoruro', 'Pallpata', 'Pichigua', 'Suyckutambo', 'Alto Pichigua'],
      'La Convención': ['Santa Ana', 'Echarate', 'Huayopata', 'Inkawasi', 'Kimbiri', 'Maranura', 'Ocobamba', 'Pichari', 'Quellouno', 'Santa Teresa', 'Vilcabamba', 'Villa Kintiarina', 'Villa Virgen'],
      'Paruro': ['Paruro', 'Accha', 'Ccapi', 'Colcha', 'Huanoquite', 'Omacha', 'Paccaritambo', 'Pillpinto', 'Yaurisque'],
      'Paucartambo': ['Paucartambo', 'Caicay', 'Challabamba', 'Colquepata', 'Huancarani', 'Kosñipata'],
      'Quispicanchi': ['Urcos', 'Andahuaylillas', 'Camanti', 'Ccarhuayo', 'Ccatca', 'Cusipata', 'Huaro', 'Lucre', 'Marcapata', 'Ocongate', 'Oropesa', 'Quiquijana'],
      'Urubamba': ['Urubamba', 'Chinchero', 'Huayllabamba', 'Machupicchu', 'Maras', 'Ollantaytambo', 'Yucay']
    },
    'Huancavelica': {
      'Huancavelica': ['Huancavelica', 'Acobambilla', 'Acoria', 'Conayca', 'Cuenca', 'Huachocolpa', 'Huando', 'Huancavelica', 'Laria', 'Manta', 'Mariscal Cáceres', 'Moya', 'Nuevo Occoro', 'Palca', 'Pilchaca', 'Vilca', 'Yauli'],
      'Acobamba': ['Acobamba', 'Andabamba', 'Anta', 'Caja', 'Marcas', 'Paucara', 'Pomacocha', 'Rosario'],
      'Angaraes': ['Lircay', 'Anchonga', 'Callanmarca', 'Ccochaccasa', 'Chincho', 'Congalla', 'Huanca-Huanca', 'Julcamarca', 'San Antonio de Antaparco', 'Santo Tomas de Pata', 'Secclla'],
      'Castrovirreyna': ['Castrovirreyna', 'Arma', 'Aurahua', 'Capillas', 'Chupamarca', 'Cocas', 'Huachos', 'Huamatambo', 'Mollepampa', 'San Juan', 'Santa Ana', 'Tantara', 'Ticrapo'],
      'Churcampa': ['Churcampa', 'Anco', 'Chinchihuasi', 'El Carmen', 'La Merced', 'Locroja', 'Pachamarca', 'Paucarbamba', 'San Miguel de Mayocc', 'San Pedro de Coris'],
      'Huaytará': ['Huaytará', 'Ayaví', 'Córdova', 'Huayacundo Arma', 'Laramarca', 'Ocoyo', 'Pilpichaca', 'Querco', 'Quito-Arma', 'San Antonio de Cusicancha', 'San Francisco de Sangayaico', 'San Isidro', 'Santiago de Chocorvos', 'Santiago de Quirahuara', 'Santo Domingo de Capillas', 'Tambo'],
      'Tayacaja': ['Pampas', 'Acostambo', 'Acraquia', 'Ahuaycha', 'Colcabamba', 'Daniel Hernández', 'Huachocolpa', 'Huaribamba', 'Ñahuimpuquio', 'Pazos', 'Quishuar', 'Salcabamba', 'Salcahuasi', 'San Marcos de Rocchac', 'Surcubamba', 'Tintay Puncu']
    },
    'Huánuco': {
      'Huánuco': ['Huánuco', 'Amarilis', 'Chinchao', 'Churubamba', 'Margos', 'Pillco Marca', 'Quisqui', 'San Francisco de Cayrán', 'San Pedro de Chaulán', 'Santa María del Valle', 'Yarumayo'],
      'Ambo': ['Ambo', 'Cayna', 'Colpas', 'Conchamarca', 'Huacar', 'San Francisco', 'San Rafael', 'Tomay Kichwa'],
      'Dos de Mayo': ['La Unión', 'Chuquis', 'Marías', 'Pachas', 'Quivilla', 'Ripán', 'Shunqui', 'Sillapata', 'Yanas'],
      'Huacaybamba': ['Huacaybamba', 'Canchabamba', 'Cochabamba', 'Pinra'],
      'Huamalíes': ['Llata', 'Arancay', 'Chavín de Pariarca', 'Jacas Grande', 'Jircan', 'Miraflores', 'Monzón', 'Punchao', 'Puños', 'Singa', 'Tantamayo'],
      'Leoncio Prado': ['Rupa-Rupa', 'Daniel Alomía Robles', 'Hermílio Valdizán', 'José Crespo y Castillo', 'Luyando', 'Mariano Damaso Beraún', 'Pucayacu'],
      'Marañón': ['Huacrachuco', 'Cholon', 'San Buenaventura'],
      'Pachitea': ['Panao', 'Chaglla', 'Molino', 'Umari'],
      'Puerto Inca': ['Puerto Inca', 'Codo del Pozuzo', 'Honoria', 'Tournavista', 'Yuyapichis'],
      'Lauricocha': ['Jesús', 'Baños', 'Jivia', 'Queropalca', 'Rondos', 'San Francisco de Asís', 'San Miguel de Cauri'],
      'Yarowilca': ['Chavinillo', 'Cahuac', 'Chacabamba', 'Aparicio Pomares', 'Jacas Chico', 'Obas', 'Pampamarca']
    },
    'Ica': {
      'Ica': ['Ica', 'La Tinguiña', 'Los Aquijes', 'Ocucaje', 'Pachacutec', 'Parcona', 'Pueblo Nuevo', 'Salas', 'San José de los Molinos', 'San Juan Bautista', 'Santiago', 'Subtanjalla', 'Tate', 'Yauca del Rosario'],
      'Chincha': ['Chincha Alta', 'Alto Laran', 'Chavin', 'Chincha Baja', 'El Carmen', 'Grocio Prado', 'Pueblo Nuevo', 'San Juan de Yanac', 'San Pedro de Huacarpana', 'Sunampe', 'Tambo de Mora'],
      'Nazca': ['Nazca', 'Changuillo', 'El Ingenio', 'Marcona', 'Vista Alegre'],
      'Palpa': ['Palpa', 'Llipata', 'Río Grande', 'Santa Cruz', 'Tibillo'],
      'Pisco': ['Pisco', 'Huancano', 'Humay', 'Independencia', 'Paracas', 'San Andrés', 'San Clemente', 'Túpac Amaru Inca']
    },
    'Junín': {
      'Huancayo': ['Huancayo', 'Carhuacallanga', 'Chacapampa', 'Chicche', 'Chilca', 'Chongos Alto', 'Chupuro', 'Colca', 'Cullhuas', 'El Tambo', 'Huacrapuquio', 'Hualhuas', 'Huancán', 'Huasicancha', 'Huayucachi', 'Ingenio', 'Pariahuanca', 'Pilcomayo', 'Pucara', 'Quichuay', 'Quilcas', 'San Agustín de Cajas', 'San Jerónimo de Tunan', 'Saño', 'Sapallanga', 'Sicaya', 'Viques'],
      'Concepción': ['Concepción', 'Aco', 'Andamarca', 'Chambara', 'Cochas', 'Comas', 'Heroinas Toledo', 'Manzanares', 'Mariscal Castilla', 'Matahuasi', 'Mito', 'Nueve de Julio', 'Orcotuna', 'San José de Quero', 'Santa Rosa de Ocopa'],
      'Chanchamayo': ['Chanchamayo', 'Perene', 'Pichanaqui', 'San Luis de Shuaro', 'San Ramón', 'Vitoc'],
      'Jauja': ['Jauja', 'Acolla', 'Apata', 'Ataura', 'Canchayllo', 'Curicaca', 'El Mantaro', 'Huamali', 'Huaripampa', 'Huertas', 'Janjaillo', 'Julcán', 'Leonor Ordóñez', 'Llocllapampa', 'Marco', 'Masma', 'Masma Chicche', 'Molinos', 'Monobamba', 'Muqui', 'Muquiyauyo', 'Paca', 'Paccha', 'Pancán', 'Parco', 'Pomacancha', 'Ricran', 'San Lorenzo', 'San Pedro de Chunan', 'Sausa', 'Sincos', 'Tunan Marca', 'Yauli', 'Yauyos'],
      'Junín': ['Junín', 'Carhuamayo', 'Ondores', 'Ulcumayo'],
      'Satipo': ['Satipo', 'Coviriali', 'Llaylla', 'Mazamari', 'Pampa Hermosa', 'Pangoa', 'Río Negro', 'Río Tambo'],
      'Tarma': ['Tarma', 'Acobamba', 'Huaricolca', 'Huasahuasi', 'La Unión', 'Palca', 'Palcamayo', 'San Pedro de Cajas', 'Tapo'],
      'Yauli': ['La Oroya', 'Chacapalpa', 'Huay-Huay', 'Marcapomacocha', 'Morococha', 'Paccha', 'Santa Bárbara de Carhuacayan', 'Santa Rosa de Sacco', 'Suitucancha'],
      'Chupaca': ['Chupaca', 'Ahuac', 'Chongos Bajo', 'Huachac', 'San Juan de Iscos', 'San Juan de Jarpa', 'Tres de Diciembre', 'Yanacancha']
    },
    'La Libertad': {
      'Trujillo': ['Trujillo', 'El Porvenir', 'Florencia de Mora', 'Huanchaco', 'La Esperanza', 'Laredo', 'Moche', 'Poroto', 'Salaverry', 'Simbal', 'Victor Larco Herrera'],
      'Ascope': ['Ascope', 'Casa Grande', 'Chicama', 'Chocope', 'Magdalena de Cao', 'Paiján', 'Rázuri', 'Santiago de Cao'],
      'Bolívar': ['Bolívar', 'Bambamarca', 'Condormarca', 'Longotea', 'Uchumarca', 'Ucuncha'],
      'Chepén': ['Chepén', 'Pacanga', 'Pueblo Nuevo'],
      'Julcán': ['Julcán', 'Calamarca', 'Carabamba', 'Huaso'],
      'Otuzco': ['Otuzco', 'Agallpampa', 'Charat', 'Huaranchal', 'La Cuesta', 'Mache', 'Paranday', 'Salpo', 'Sinsicap', 'Usquil'],
      'Pacasmayo': ['San Pedro de Lloc', 'Guadalupe', 'Jequetepeque', 'Pacasmayo', 'San José'],
      'Pataz': ['Tayabamba', 'Buldibuyo', 'Chillia', 'Huancaspata', 'Huaylillas', 'Huayo', 'Ongón', 'Parcoy', 'Pataz', 'Pias', 'Santiago de Challas', 'Taurija', 'Urpay'],
      'Sánchez Carrión': ['Huamachuco', 'Chugay', 'Cochorco', 'Curgos', 'Marcabal', 'Sanagorán', 'Sarin', 'Sartimbamba'],
      'Santiago de Chuco': ['Santiago de Chuco', 'Angasmarca', 'Cachicadán', 'Mollepata', 'Mollebamba', 'Quiruvilca', 'Santa Cruz de Chuca', 'Sitabamba'],
      'Gran Chimú': ['Cascas', 'Lucma', 'Marmot', 'Sayapullo'],
      'Virú': ['Virú', 'Chao', 'Guadalupito']
    },
    'Lambayeque': {
      'Chiclayo': ['Chiclayo', 'Chongoyape', 'Eten', 'Eten Puerto', 'José Leonardo Ortiz', 'La Victoria', 'Lagunas', 'Monsefú', 'Nueva Arica', 'Oyotún', 'Patapo', 'Picsi', 'Pimentel', 'Reque', 'Santa Rosa', 'Saña', 'Cayalti'],
      'Ferreñafe': ['Ferreñafe', 'Cañaris', 'Incahuasi', 'Manuel Antonio Mesones Muro', 'Pítipo', 'Pueblo Nuevo'],
      'Lambayeque': ['Lambayeque', 'Chochope', 'Illimo', 'Jayanca', 'Mochumí', 'Morrope', 'Motupe', 'Olmos', 'Pacora', 'Salas', 'San José', 'Tucume']
    },
    'Lima': {
      'Lima': ['Cercado de Lima', 'Ancón', 'Ate', 'Barranco', 'Breña', 'Carabayllo', 'Chaclacayo', 'Chorrillos', 'Cieneguilla', 'Comas', 'El Agustino', 'Independencia', 'Jesús María', 'La Molina', 'La Victoria', 'Lince', 'Los Olivos', 'Lurigancho', 'Lurín', 'Magdalena del Mar', 'Miraflores', 'Pachacamac', 'Pucusana', 'Puente Piedra', 'Punta Hermosa', 'Punta Negra', 'Rímac', 'San Bartolo', 'San Borja', 'San Isidro', 'San Juan de Lurigancho', 'San Juan de Miraflores', 'San Luis', 'San Martín de Porres', 'San Miguel', 'Santa Anita', 'Santa María del Mar', 'Santa Rosa', 'Santiago de Surco', 'Surquillo', 'Villa El Salvador', 'Villa María del Triunfo'],
      'Barranca': ['Barranca', 'Paramonga', 'Pativilca', 'Supe', 'Supe Puerto'],
      'Cajatambo': ['Cajatambo', 'Copa', 'Gorgor', 'Huancapon', 'Manas'],
      'Canta': ['Canta', 'Arahuay', 'Huamantanga', 'Huaros', 'Lachaqui', 'San Buenaventura', 'Santa Rosa de Quives'],
      'Cañete': ['San Vicente de Cañete', 'Asia', 'Calango', 'Cerro Azul', 'Chilca', 'Coayllo', 'Imperial', 'Lunahuana', 'Mala', 'Nuevo Imperial', 'Pacaran', 'Quilmana', 'San Antonio', 'San Luis', 'Santa Cruz de Flores', 'Zuñiga'],
      'Huaral': ['Huaral', 'Atavillos Alto', 'Atavillos Bajo', 'Aucallama', 'Chancay', 'Ihuari', 'Lampian', 'Pacaraos', 'Santa Cruz de Andamarca', 'Sumbilca', 'Veintisiete de Noviembre'],
      'Huarochirí': ['Matucana', 'Antioquia', 'Callahuanca', 'Carampoma', 'Chicla', 'Cuenca', 'Huachupampa', 'Huanza', 'Huarochiri', 'Lahuaytambo', 'Langa', 'Laraos', 'Mariatana', 'Ricardo Palma', 'San Andrés de Tupicocha', 'San Antonio', 'San Bartolomé', 'San Damian', 'San Juan de Iris', 'San Juan de Tantaranche', 'San Lorenzo de Quinti', 'San Mateo', 'San Mateo de Otao', 'San Pedro de Casta', 'San Pedro de Huancayre', 'Sangallaya', 'Santa Cruz de Cocachacra', 'Santa Eulalia', 'Santiago de Anchucaya', 'Santiago de Tuna', 'Santo Domingo de Los Olleros', 'Surco'],
      'Huaura': ['Huacho', 'Ambar', 'Caleta de Carquín', 'Checras', 'Hualmay', 'Huaura', 'Leoncio Prado', 'Paccho', 'Santa Leonor', 'Santa María', 'Sayán', 'Vegueta'],
      'Oyón': ['Oyon', 'Andajes', 'Caujul', 'Cochamarca', 'Naván', 'Pachangara'],
      'Yauyos': ['Yauyos', 'Alis', 'Ayauca', 'Ayaviri', 'Azángaro', 'Cacra', 'Carania', 'Catahuasi', 'Chocos', 'Cochas', 'Colonia', 'Hongos', 'Huampara', 'Huancaya', 'Huangascar', 'Huantan', 'Huañec', 'Laraos', 'Lincha', 'Madean', 'Miraflores', 'Omas', 'Putinza', 'Quinches', 'Quinocay', 'San Joaquín', 'San Pedro de Pilas', 'Tanta', 'Tauripampa', 'Tomas', 'Tupe', 'Viñac', 'Vitis']
    },
    'Loreto': {
      'Maynas': ['Iquitos', 'Alto Nanay', 'Fernando Lores', 'Indiana', 'Las Amazonas', 'Mazan', 'Napo', 'Punchana', 'Torres Causana', 'Belén', 'San Juan Bautista'],
      'Alto Amazonas': ['Yurimaguas', 'Balsapuerto', 'Jeberos', 'Lagunas', 'Santa Cruz', 'Teniente César López Rojas'],
      'Datem del Marañón': ['Barranca', 'Cahuapanas', 'Manseriche', 'Morona', 'Pastaza', 'Andoas'],
      'Loreto': ['Nauta', 'Parinari', 'Tigre', 'Trompeteros', 'Urarinas'],
      'Mariscal Ramón Castilla': ['Ramón Castilla', 'Pebas', 'Yavari', 'San Pablo'],
      'Putumayo': ['Putumayo', 'Rosa Panduro', 'Teniente Manuel Clavero', 'Yaguas'],
      'Requena': ['Requena', 'Alto Tapiche', 'Capelo', 'Emilio San Martín', 'Maquia', 'Puinahua', 'Saquena', 'Soplin', 'Tapiche', 'Jenaro Herrera', 'Yaquerana'],
      'Ucayali': ['Contamana', 'Inahuaya', 'Padre Márquez', 'Pampa Hermosa', 'Sarayacu', 'Vargas Guerra']
    },
    'Madre de Dios': {
      'Tambopata': ['Tambopata', 'Inambari', 'Las Piedras', 'Laberinto'],
      'Manu': ['Manu', 'Fitzcarrald', 'Madre de Dios', 'Huepetuhe'],
      'Tahuamanu': ['Iberia', 'Iñapari', 'Tahuamanu']
    },
    'Moquegua': {
      'Mariscal Nieto': ['Moquegua', 'Carumas', 'Cuchumbaya', 'Samegua', 'San Cristóbal', 'Torata'],
      'General Sánchez Cerro': ['Omate', 'Chojata', 'Coalaque', 'Ichuña', 'La Capilla', 'Lloque', 'Matalaque', 'Puquina', 'Quinistaquillas', 'Ubinas', 'Yunga'],
      'Ilo': ['Ilo', 'El Algarrobal', 'Pacocha']
    },
    'Pasco': {
      'Pasco': ['Chaupimarca', 'Huachón', 'Huariaca', 'Huayllay', 'Ninacaca', 'Pallanchacra', 'Paucartambo', 'San Francisco de Asís de Yarusyacan', 'Simón Bolívar', 'Ticlacayán', 'Tinyahuarco', 'Vicco', 'Yanacancha'],
      'Daniel Alcides Carrión': ['Yanahuanca', 'Chacayan', 'Goyllarisquizga', 'Paucar', 'San Pedro de Pillao', 'Santa Ana de Tusi', 'Tapuc', 'Vilcabamba'],
      'Oxapampa': ['Oxapampa', 'Chontabamba', 'Constitución', 'Huancabamba', 'Palcazú', 'Pozuzo', 'Puerto Bermúdez', 'Villa Rica']
    },
    'Piura': {
      'Piura': ['Piura', 'Castilla', 'Catacaos', 'Cura Mori', 'El Tallán', 'La Arena', 'La Unión', 'Las Lomas', 'Tambo Grande'],
      'Ayabaca': ['Ayabaca', 'Frias', 'Jilili', 'Lagunas', 'Montero', 'Pacaipampa', 'Paimas', 'Sapillica', 'Sicchez', 'Suyo'],
      'Huancabamba': ['Huancabamba', 'Canchaque', 'El Carmen de la Frontera', 'Lalaquiz', 'San Miguel de El Faique', 'Sondor', 'Sondorillo'],
      'Morropón': ['Chulucanas', 'Buenos Aires', 'Chalaco', 'La Matanza', 'Morropon', 'Salitral', 'San Juan de Bigote', 'Santa Catalina de Mossa', 'Santo Domingo', 'Yamango'],
      'Paita': ['Paita', 'Amotape', 'Arenal', 'Colán', 'La Huaca', 'Tamarindo', 'Vichayal'],
      'Sullana': ['Sullana', 'Bellavista', 'Ignacio Escudero', 'Lancones', 'Marcavelica', 'Miguel Checa', 'Querecotillo', 'Salitral'],
      'Talara': ['Pariñas', 'El Alto', 'La Brea', 'Lobitos', 'Los Organos', 'Máncora'],
      'Sechura': ['Sechura', 'Bellavista de la Unión', 'Bernal', 'Cristo Nos Valga', 'Rinconada Llícuar', 'Vice']
    },
    'Puno': {
      'Puno': ['Puno', 'Acora', 'Amantani', 'Atuncolla', 'Capachica', 'Chucuito', 'Coata', 'Huata', 'Mañazo', 'Paucarcolla', 'Pichacani', 'Platería', 'San Antonio', 'Tiquillaca', 'Vilque'],
      'Azángaro': ['Azángaro', 'Achaya', 'Arapa', 'Asillo', 'Caminaca', 'Chupa', 'José Domingo Choquehuanca', 'Muñani', 'Potoni', 'Saman', 'San Anton', 'San José', 'San Juan de Salinas', 'Santiago de Pupuja', 'Tirapata'],
      'Carabaya': ['Macusani', 'Ajoyani', 'Ayapata', 'Coasa', 'Corani', 'Crucero', 'Ituata', 'Ollachea', 'San Gabán', 'Usicayos'],
      'Chucuito': ['Juli', 'Desaguadero', 'Huacullani', 'Kelluyo', 'Pisacoma', 'Pomata', 'Zepita'],
      'El Collao': ['Ilave', 'Capazo', 'Pilcuyo', 'Santa Rosa', 'Conduriri'],
      'Huancané': ['Huancané', 'Cojata', 'Huatasani', 'Inchupalla', 'Pusi', 'Rosaspata', 'Taraco', 'Vilque Chico'],
      'Lampa': ['Lampa', 'Cabanilla', 'Calapuja', 'Nicasio', 'Ocuviri', 'Palca', 'Paratia', 'Pucara', 'Santa Lucia', 'Vilavila'],
      'Melgar': ['Ayaviri', 'Antauta', 'Cupi', 'Llalli', 'Macari', 'Nuñoa', 'Orurillo', 'Santa Rosa', 'Umachiri'],
      'Moho': ['Moho', 'Conima', 'Huayrapata', 'Tilali'],
      'San Antonio de Putina': ['Putina', 'Ananea', 'Pedro Vilca Apaza', 'Quilcapuncu', 'Sina'],
      'San Román': ['Juliaca', 'Cabana', 'Cabanillas', 'Caracoto'],
      'Sandia': ['Sandia', 'Cuyocuyo', 'Limbani', 'Patambuco', 'Phara', 'Quiaca', 'San Juan del Oro', 'Yanahuaya', 'Alto Inambari'],
      'Yunguyo': ['Yunguyo', 'Anapia', 'Copani', 'Cuturapi', 'Ollaraya', 'Tinicachi', 'Unicachi']
    },
    'San Martín': {
      'Moyobamba': ['Moyobamba', 'Calzada', 'Habana', 'Jepelacio', 'Soritor', 'Yantalo'],
      'Bellavista': ['Bellavista', 'Alto Biavo', 'Bajo Biavo', 'Huallaga', 'San Pablo', 'San Rafael'],
      'El Dorado': ['San José de Sisa', 'Agua Blanca', 'San Martín', 'Santa Rosa', 'Shatoja'],
      'Huallaga': ['Saposoa', 'Alto Saposoa', 'El Eslabón', 'Piscoyacu', 'Sacanche', 'Tingo de Saposoa'],
      'Lamas': ['Lamas', 'Alonso de Alvarado', 'Barranquita', 'Caynarachi', 'Cuñumbuqui', 'Pinto Recodo', 'Rumisapa', 'San Roque de Cumbaza', 'Shanao', 'Tabalosos', 'Zapatero'],
      'Mariscal Cáceres': ['Juanjuí', 'Campanilla', 'Huicungo', 'Pachiza', 'Pajarillo'],
      'Picota': ['Picota', 'Buenos Aires', 'Caspisapa', 'Pilluana', 'Pucacaca', 'San Cristóbal', 'San Hilarión', 'Shamboyacu', 'Tingo de Ponasa', 'Tres Unidos'],
      'Rioja': ['Rioja', 'Awajun', 'Elías Soplin Vargas', 'Nueva Cajamarca', 'Pardo Miguel', 'Posic', 'San Fernando', 'Yorongos', 'Yuracyacu'],
      'San Martín': ['Tarapoto', 'Alberto Leveau', 'Cacatachi', 'Chazuta', 'Chipurana', 'El Porvenir', 'Huimbayoc', 'Juan Guerra', 'La Banda de Shilcayo', 'Morales', 'Papaplaya', 'San Antonio', 'Sauce', 'Shapaja'],
      'Tocache': ['Tocache', 'Nuevo Progreso', 'Polvora', 'Shunte', 'Uchiza']
    },
    'Tacna': {
      'Tacna': ['Tacna', 'Alto de la Alianza', 'Ciudad Nueva', 'Inclán', 'Pachía', 'Palca', 'Sama', 'Coronel Gregorio Albarracín Lanchipa'],
      'Candarave': ['Candarave', 'Cairani', 'Camilaca', 'Curibaya', 'Huanuara', 'Quilahuani'],
      'Jorge Basadre': ['Locumba', 'Ilabaya', 'Ite'],
      'Tarata': ['Tarata', 'Chucatamani', 'Estique', 'Estique-Pampa', 'Sitajara', 'Susapaya', 'Tarucachi', 'Ticaco']
    },
    'Tumbes': {
      'Tumbes': ['Tumbes', 'Corrales', 'La Cruz', 'Pampas de Hospital', 'San Jacinto', 'San Juan de la Virgen'],
      'Contralmirante Villar': ['Zorritos', 'Casitas', 'Canoas de Punta Sal'],
      'Zarumilla': ['Zarumilla', 'Aguas Verdes', 'Matapalo', 'Papayal']
    },
    'Ucayali': {
      'Coronel Portillo': ['Calleria', 'Campoverde', 'Iparia', 'Masisea', 'Yarinacocha', 'Nueva Requena', 'Manantay'],
      'Atalaya': ['Raimondi', 'Sepahua', 'Tahuania', 'Yurua'],
      'Padre Abad': ['Padre Abad', 'Irazola', 'Curimana'],
      'Purus': ['Purus']
    }
  };

  // Provincias y distritos que se actualizarán dinámicamente
  provincias: string[] = [];
  distritos: string[] = [];
  nombresDepartamentos: string[] = [];
  proyectos = ['Proyecto1', 'Proyecto2'];

  constructor(private fb: FormBuilder, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
    this.reclamoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      correo: ['', [Validators.required, Validators.email]],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Solo números
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      proyectoList: ['', Validators.required],  
      detalleReclamo: ['', Validators.required],
      tipoReclamo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Escuchar cambios en el campo "Departamento"
    this.reclamoForm.get('departamento')?.valueChanges.subscribe(selectedDepartamento => {
      if (selectedDepartamento) {
        this.provincias = Object.keys(this.departamentos[selectedDepartamento] || {});
        this.reclamoForm.get('provincia')?.setValue('');  // Resetear el campo de provincia
        this.distritos = [];  // Limpiar distritos
        this.reclamoForm.get('distrito')?.setValue('');  // Resetear el campo de distrito
      }
    });

    // Escuchar cambios en el campo "Provincia"
    this.reclamoForm.get('provincia')?.valueChanges.subscribe(selectedProvincia => {
      const selectedDepartamento = this.reclamoForm.get('departamento')?.value;
      if (selectedProvincia && selectedDepartamento) {
        this.distritos = this.departamentos[selectedDepartamento][selectedProvincia] || [];
        this.reclamoForm.get('distrito')?.setValue('');  // Resetear el campo de distrito
      }
    });
    {
      // Asignar los nombres de los departamentos
      this.nombresDepartamentos = Object.keys(this.departamentos);
    }
  }

  onSubmit() {
    this.loading = true;
    const dialogRef = this.dialog.open(AlertComponent, {});
  
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        if (this.reclamoForm.valid) {
          const formData = this.reclamoForm.value;
  
          // Send email to the main recipient
          emailjs.send(
            'service_0jss4tb',  // Your Service ID
            'template_29ybmsm', // Your Template ID
            formData,           // Form values
            'U8AJSYKAdhYUS25Qs' // Your User ID
          ).then((result: EmailJSResponseStatus) => {
            this.mostrarNotificacion = true;
            this.mostrarNotiError = true;
            this.cdr.detectChanges();
          }, (error) => {
            this.loading = false;
            this.mostrarNotiError = false;
            this.cdr.detectChanges();
          });
  
          // Send copy of the complaint to the client
          const clientFormData = {
            ...formData,        // Spread the original form data
            correo: formData.correo // Use the client's email for the copy
          };
  
          emailjs.send(
            'service_0jss4tb',  // Same Service ID
            'template_29ybmsm', // Same Template ID
            clientFormData,      // Send email to client's email
            'U8AJSYKAdhYUS25Qs' // Same User ID
          ).then((result: EmailJSResponseStatus) => {
            this.loading = false;
            this.cdr.detectChanges();
          }, (error) => {
            this.loading = false;
            this.mostrarNotiError = false;
            this.cdr.detectChanges();
          });
        } else {
          this.loading = false;
          this.mostrarNotificacion = true;
          this.mostrarNotiError = false;
          this.cdr.detectChanges();
          this.reclamoForm.markAllAsTouched();
        }
        this.reclamoForm.reset();
        this.cdr.detectChanges();
      }
    });
  }
  
  
  close(event: boolean) {
    this.loading = false;
    this.mostrarNotificacion = event;
    this.cdr.detectChanges();
  }
}
