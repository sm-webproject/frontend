import { Form, FormProps } from "antd";
import { useEffect, useRef } from "react";

/**
 * initialValues 의 값이 새롭게 갱신되면 값을 설정한다
 * @constructor
 */
const LazyForm = ({ children, initialValues, ...rest }: FormProps) => {
  const [form] = Form.useForm();
  // 리렌더링 불필요 하므로 ref 사용
  const initialRef = useRef(false);
  useEffect(() => {
    if (initialValues && !initialRef.current) {
      initialRef.current = true;
      form.setFieldsValue(initialValues);
    }
    // initialValues 가 바뀔 때만 감지
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  return (
    <Form form={form} {...rest}>
      <>{children}</>
    </Form>
  );
};

export default LazyForm;
