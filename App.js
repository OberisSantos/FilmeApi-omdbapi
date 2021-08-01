import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


export default function App() {
  const [nome, setNome] = useState();
  const [filme, setFilme] = useState({"Title":"Wonder Woman","Year":"2017","Rated":"PG-13","Released":"02 Jun 2017","Runtime":"141 min","Genre":"Action, Adventure, Fantasy","Director":"Patty Jenkins","Writer":"Allan Heinberg, Zack Snyder, Jason Fuchs","Actors":"Gal Gadot, Chris Pine, Robin Wright","Plot":"When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.","Language":"English, German, Dutch, Flemish, French, Spanish, Chinese, Greek, Ancient (to 1453), North American Indian","Country":"United States, United Kingdom","Awards":"26 wins & 72 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"7.4","imdbVotes":"599,736","imdbID":"tt0451279","Type":"movie","DVD":"10 Jul 2017","BoxOffice":"$412,815,408","Production":"Atlas Entertainment, Cruel and Unusual","Website":"N/A","Response":"True"});

  const buscarFilme = async () =>{ /*Função assincrona usada quando precisa fazer uma requisicao e esperar resposta */
    /*await e fetch usado todas as vezes que tiver uma funçao assincrona */
    const requisicao = await fetch(`http://www.omdbapi.com/?apikey=47f131ba&t=${nome}`);
    const resposta = await requisicao.json();
    console.log(resposta);
    setFilme(resposta);
  };

  return (
    <Tela>
      <Header>
        <Input placeholder="Digite o nome do filme..." value={nome} onChangeText={(filme) => {setNome(filme)} } placeholderTextColor="#c7c7c7"/>
        <Botao onPress={buscarFilme} activeOpacity={0.4 /*Altera a opacidade do button */}> 
          <BuscaImage source={require('./assets/icons8-pesquisar-120.png')}/>
        </Botao>
      </Header>
      <Destaque>
        <Poster resizeMode="contain" source={{uri: filme.Poster}} />
      </Destaque>

      <Info>
        <Titulo>{filme.Title}</Titulo>
        <Linha>
          <Conteudos>Ano: {filme.Year}</Conteudos>
          <Conteudos>Duração: {filme.Runtime}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Pais: {filme.Country}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Idioma: {filme.Language}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Gênero: {filme.Genre}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Enredo: {filme.Plot}</Conteudos>
        </Linha>
      </Info>
      
    </Tela>
  );
}

const Header = styled.View`
  width: 100%;
  height: 85px;
  background-color: #657D79;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const Input = styled.TextInput`
  margin-top: 25px;
  font-size: 20px;
  color: #fff;
  padding-left: 20px;
`;

const Botao = styled.TouchableOpacity`
`;

const BuscaImage = styled.Image`
  margin-top: 25px;
  width: 30px;
  height: 30px;
`;

const Destaque = styled.View`
  width: 100%;
  height: 300px;
  background-color: #232424;
  align-items: center;
`;

const Poster = styled.Image`  
  width: 80%;  
  height: 100%;
  border-radius: 10px;
`;

const Info = styled.View`
  width: 100%;
  flex:1;
  background-color: #E1EBE9;
`;

const Linha = styled.View`
  margin-top: 10px;
  width: 100%;
  padding-right: 10px;
  flex-direction: row;
  display: flex;
  flex-flow: row wrap;
`;

const Conteudos = styled.Text`
font-size: 12px;
padding-left: 10px;;
`;

const Titulo = styled.Text`
  font-size: 25px;
  font-weight: 600;  
  text-align: center;
  
`;

const Tela = styled.View`
  flex: 1;
  align-items: center;
`;

