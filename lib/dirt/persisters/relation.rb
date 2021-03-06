module Dirt
  require 'dirt/persisters/memory_persister'

  class Relation < MemoryPersister
    @records = []

    def initialize(records)
      @records = records
    end

    def first
      @records.first

      #match = @records.first
      #match ? match : nil
    end

    def collect(&block)
      @records.collect(&block)
    end

    def each(&block)
      @records.each(&block)
    end

    def empty?
      @records.empty?
    end

    def all?(&block)
      every = true

      @records.each do |record|
        every &= yield record
      end
    end
  end
end