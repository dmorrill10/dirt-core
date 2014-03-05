require 'spec_helper'
require 'persister_spec_helper'
require 'persisters/memory_persister'

module Dirt
  describe MemoryPersister do
    let(:type) { :test }

    it_behaves_like(:persister) do
      let(:persisted) { double('persisted object', attr1: 5, to_hash: {attr1: 5}) }
      let(:persisted2) { double('persisted object 2', attr1: 5, to_hash: {attr1: 5}) }
      let(:different_persisted) { double('different persisted object', attr1: 28, to_hash: {attr1: 28}) }

      let(:where_params) { {attr1: 5} }
    end

    describe '#save' do
      let(:data) { double('data', to_hash: {some: 'data'}) }

      it 'should return the id + data as struct on success' do
        id = double('id')

        result = subject.save(data, id)

        result.should == OpenStruct.new(data.to_hash.merge(id: id))
      end

      it 'should remember the data by the given id' do
        id = 3

        subject.save(data, id)

        subject.instance_variable_get(:@records).should == {id => data}
      end

      it 'should remember the data by a made up id when none given' do
        subject.save(data, nil)

        subject.instance_variable_get(:@records).should == {1 => data}
      end
    end

    describe '#load' do
      let(:data) { double('data', to_hash: {some: 'data'}) }

      it 'should return only the appropriate id and data' do
        id = double('id')

        subject.instance_variable_set(:@records, {id => data, double('id2') => double('data2')})

        subject.load(id).should == OpenStruct.new(data.to_hash.merge(id: id))
      end

      it 'should return nil when given an invalid id' do
        id = double('id3')

        subject.instance_variable_set(:@records, {double('id') => double('data'), double('id2') => double('data2')})

        subject.load(id).should == nil
      end
    end

    describe '#exists?' do
      it 'should return only the appropriate id and data' do
        id = double('id')
        data = double('data')

        subject.instance_variable_set(:@records, {id => data})

        subject.exists?(id).should be true
      end

      it 'should raise exception when given an invalid id' do
        id = double('id3')

        subject.instance_variable_set(:@records, {double('id') => double('data'), double('id2') => double('data2')})

        subject.exists?(id).should be false
      end
    end

    describe '#all' do
      it 'should return all of the appropriate id and data' do
        records = {double('id1') => double('data1', to_hash: {attr1: double}),
                   double('id2') => double('data2', to_hash: {attr1: double}),
                   double('id3') => double('data3', to_hash: {attr1: double})}

        subject.instance_variable_set(:@records, records)

        subject.all.should == records.collect { |id, r| OpenStruct.new(r.to_hash.merge(id: id)) }
      end
    end

    describe '#delete' do
      let(:data) { double('data', to_hash: {some: 'data'}) }

      it 'should return the deleted id and data as a struct' do
        id = double('id')

        subject.instance_variable_set(:@records, {id => data})

        subject.delete(id).should == OpenStruct.new(data.to_hash.merge(id: id))
      end

      it 'should delete the given id and data' do
        id = double('id')

        subject.instance_variable_set(:@records, {id => data})

        subject.delete(id)

        subject.instance_variable_get(:@records).should == {}
      end

      it 'should delete only the appropriate id and data' do
        id1 = double('id1')
        id2 = double('id2')
        data2 = double('data2')

        subject.instance_variable_set(:@records, {id1 => data, id2 => data2})

        subject.delete(id1)

        subject.instance_variable_get(:@records).should == {id2 => data2}
      end

      it 'should return nil when given an invalid id' do
        id = double('id3')

        subject.instance_variable_set(:@records, {double('id') => double('data'), double('id2') => double('data2')})

        subject.delete(id).should == nil
      end
    end
  end
end