import { Button } from '@chakra-ui/react';

interface IGenericButton {
  onClick: () => {};
  children: string;
}

export const GenericButton = ({ onClick, children }: IGenericButton) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      {children}
    </Button>
  );
};
