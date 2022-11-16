import { Form, FormItemProps } from "antd";
import { NamePath } from "antd/lib/form/interface";

import { SkeletonBox } from "./Element";

interface SkeletonFormItem extends FormItemProps {
  // FormItemProps 은 name 이 null 일 수 있지만 SkeletonFormItem 은 절대 null 이면 안되니 재정의
  name: NamePath;
}

/**
 * Form.Item의 값이 로딩 되지 않으면 Skeleton 렌더링
 * @param {React.ReactNode} children
 * @param {string} name 의존할 key
 * @param {SkeletonFormItem} rest
 * @constructor
 */
const SkeletonFormItem = ({ children, name, ...rest }: SkeletonFormItem) => {
  return (
    <Form.Item noStyle shouldUpdate>
      {(form) => {
        const value = form.getFieldValue(name);
        return (
          <Form.Item {...rest} name={name}>
            {value === undefined ? <SkeletonBox h="32px" /> : children}
          </Form.Item>
        );
      }}
    </Form.Item>
  );
};

export default SkeletonFormItem;
