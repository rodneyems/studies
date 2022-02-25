import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../componets/Form/Button';
import { CategorySelectButton } from '../../componets/Form/CategorySelectButton';
import { Input } from '../../componets/Form/Input';
import { TransactionTypeButton } from '../../componets/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';

export function Register() {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }
  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <TransactionsTypes>
            <TransactionTypeButton type='up' title='Income' />
            <TransactionTypeButton type='down' title='Outcome' />
          </TransactionsTypes>
          <CategorySelectButton title={'Categoria'} onPress={handleOpenSelectCategoryModal}></CategorySelectButton>
        </Fields>

        <Button title='Confirmar'></Button>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          closeSelectCategory={handleCloseSelectCategoryModal}
          setCategory={ setCategory }
        ></CategorySelect>
      </Modal>
    </Container>
  );
}
