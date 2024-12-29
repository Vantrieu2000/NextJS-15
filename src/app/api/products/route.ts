import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Giả lập dữ liệu từ database
    const products = [
      { id: 1, name: 'Product 1', price: 99 },
      { id: 2, name: 'Product 2', price: 199 },
      { id: 3, name: 'Product 3', price: 299 },
    ];

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Xử lý logic tạo sản phẩm mới
    return NextResponse.json({ message: 'Product created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 