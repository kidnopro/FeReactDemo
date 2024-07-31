import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserManagement = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    password: "********",
    registrationDate: "2024-01-01",
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 ml-4">Thông Tin Người Dùng    </h1>
      <div className="flex flex-col gap-4 mt-10">
       
        <div className="flex font-semibold border-b pb-2">
          <div className="flex-1 px-4 text-center">Tên Khách Hàng</div>
          <div className="flex-1 px-4 text-center">Email</div>
          <div className="flex-1 px-4 text-center">Mật Khẩu</div>
          <div className="flex-1 px-4 text-center">Ngày Đăng Kí</div>
          <div className="w-32 px-4 text-center">Chức Năng</div>
        </div>

        <div className="flex items-center border p-4 rounded">
          <div className="flex-1 px-4">
            <Input
              value={user.name}
              readOnly
              className="bg-gray-100 w-full text-center"
            />
          </div>
          <div className="flex-1 px-4">
            <Input
              value={user.email}
              readOnly
              className="bg-gray-100 w-full text-center"
            />
          </div>
          <div className="flex-1 px-4">
            <Input
              value={user.password}
              readOnly
              className="bg-gray-100 w-full text-center"
            />
          </div>
          <div className="flex-1 px-4">
            <Input
              value={user.registrationDate}
              readOnly
              className="bg-gray-100 w-full text-center"
            />
          </div>
          <div className="w-32 px-4 text-center">
            <Button  className="w-full">Xóa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
