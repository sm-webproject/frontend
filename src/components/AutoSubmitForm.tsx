import { Form, FormProps } from "antd";

interface AutoSubmitFormPops {
  //  의존할 key
  depend?: string[];
}

/**
 * Form.Item의 값이 바뀌면 자동으로 submit을 수행한다.
 * @param {React.ReactNode} children
 * @param {string[] | undefined} depend 의존할 key
 * @param {FormProps} rest
 * @constructor
 */
const AutoSubmitForm = ({
  children,
  depend,
  ...rest
}: FormProps & AutoSubmitFormPops) => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onFinishFailed={(errorInfo) => console.error(errorInfo)}
      onValuesChange={(changedValues) => {
        if (depend) {
          for (const key in changedValues)
            if (depend.find((e) => e === key)) {
              form.submit();
              return;
            }
        } else form.submit();
      }}
      {...rest}
    >
      <>{children}</>
    </Form>
  );
};

export default AutoSubmitForm;
