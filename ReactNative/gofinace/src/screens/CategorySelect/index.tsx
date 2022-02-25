import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../componets/Form/Button';
import { categories } from '../../global/utils/categories';
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './style';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(item: Category){
    setCategory(item);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item, index) => item.key}
        renderItem={({ item }) => (
          <>
            <Category onPress={() => handleCategorySelect(item)} isActive={category.key === item.key}>
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
            <Separator />
          </>
        )}
      />
      <Footer>
        <Button onPress={closeSelectCategory} title='Selecionar'></Button>
      </Footer>
    </Container>
  );
}
